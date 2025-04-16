<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Course extends Model
{
    use HasFactory;


    protected $fillable = [
        'image',
        'titre',
        'description',
        'nombre_secsion',
        'nombre_heure',
        'category_id'
    ];
    
    public function category():BelongsTo
    {
        return $this->BelongsTo(Category::class);
    }
}