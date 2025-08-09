<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Get;
use Filament\Tables;
use Filament\Tables\Table;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Product Information')->schema([
                    TextInput::make('name')
                        ->required()
                        ->maxLength(255),
                    Select::make('category_id')
                        ->relationship('category', 'name')
                        ->label('Category')
                        ->searchable()
                        ->required(),
                    Textarea::make('description')
                        ->required(),
                ]),

                Section::make('Pricing & Stock')->schema([
                    Toggle::make('has_sizes')
                        ->label('Enable Sizes')
                        ->live(),

                    TextInput::make('price')
                        ->numeric()
                        ->required()
                        ->prefix('Rp')
                        ->hidden(fn(Get $get) => $get('has_sizes')),

                    TextInput::make('stock')
                        ->numeric()
                        ->required()
                        ->hidden(fn(Get $get) => $get('has_sizes')),

                    Repeater::make('sizes')
                        ->relationship()
                        ->schema([
                            Select::make('size')
                                ->options([
                                    'S' => 'S',
                                    'M' => 'M',
                                    'L' => 'L',
                                ])
                                ->required()
                                ->live()
                                ->disableOptionWhen(function (string $value, Get $get): bool {
                                    $currentState = $get('size');
                                    if ($value === $currentState) {
                                        return false;
                                    }
                                    $usedSizes = collect($get('../../sizes'))->pluck('size')->filter()->all();
                                    return in_array($value, $usedSizes);
                                }),
                            TextInput::make('price')
                                ->numeric()
                                ->prefix('Rp')
                                ->required(),
                            TextInput::make('stock')
                                ->numeric()
                                ->required(),
                        ])
                        ->columns(3)
                        ->visible(fn(Get $get) => $get('has_sizes')),
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('category.name')->sortable()->label('Category'),
                Tables\Columns\TextColumn::make('price')->money('IDR'),
                Tables\Columns\TextColumn::make('stock'),
            ])
            ->defaultSort('id', 'desc')
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
            RelationManagers\ImagesRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
