<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ExperimentParam extends Model
{
  use HasFactory;

  /**
   * The attributes that are mass assignable.
   *
   * @var array<string>
   */
  protected $fillable = ['name', 'is_output', 'is_quantitative'];

  /**
   * Get the machinery to which the parameter belongs
   */
  public function machinery(): BelongsTo
  {
    return $this->belongsTo(Machinery::class);
  }
}
