<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Experiment extends Model
{
  use HasFactory;

  /**
   * The attributes that are mass assignable.
   *
   * @var array<string>
   */
  protected $fillable = ['name', 'date'];

  /**
   * The relationships that should always be loaded.
   *
   * @var array<string>
   */
  protected $with = ['machinery'];

  /**
   * Get experiment's date in translated format
   */
  protected function date(): Attribute
  {
    return Attribute::make(
      get: fn ($value) => Carbon::parse($value)->translatedFormat('d F Y')
    );
  }

  /**
   * Get the machinery on which the experiment was conducted
   */
  public function machinery(): BelongsTo
  {
    return $this->belongsTo(Machinery::class);
  }

  /**
   * Get the experiment's quantitative inputs
   */
  public function quantitative_inputs(): HasMany
  {
    return $this->hasMany(ExperimentQuantitativeInput::class);
  }

  /**
   * Get the experiment's quality inputs
   */
  public function quality_inputs(): HasMany
  {
    return $this->hasMany(ExperimentQualityInput::class);
  }

  /**
   * Get all the inputs of the experiment
   */
  public function inputs(): Collection
  {
    $quantitative_inputs = $this->quantitative_inputs()
      ->with('experiment_param:id,name')
      ->get();

    $quality_inputs = $this->quality_inputs()
      ->with('experiment_param:id,name')
      ->get();

    return $quantitative_inputs->concat($quality_inputs);
  }

  /**
   * Get the experiment's outputs
   */
  public function outputs(): HasMany
  {
    return $this->hasMany(ExperimentOutput::class);
  }
}
