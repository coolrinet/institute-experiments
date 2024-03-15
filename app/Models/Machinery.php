<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Machinery extends Model
{
  use HasFactory;

  /**
   * The attributes that are mass assignable.
   *
   * @var array<string>
   */
  protected $fillable = ['name'];

  /**
   * Get machinery's experiments
   */
  public function experiments(): HasMany
  {
    return $this->hasMany(Experiment::class);
  }

  /**
   * Get machinery's experiment parameters
   */
  public function experiment_params(): HasMany
  {
    return $this->hasMany(ExperimentParam::class);
  }
}
