<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ExperimentQuantitativeInput extends Model
{
  use HasFactory;

  /**
   * The attributes that are mass assignable.
   *
   * @var array<string>
   */
  protected $fillable = ['value'];

  /**
   * Get an experiment that used the parameter
   */
  public function experiment(): BelongsTo
  {
    return $this->belongsTo(Experiment::class);
  }

  /**
   * Get the parameter's additional information
   */
  public function experiment_param(): BelongsTo
  {
    return $this->belongsTo(ExperimentParam::class, 'param_id');
  }
}
