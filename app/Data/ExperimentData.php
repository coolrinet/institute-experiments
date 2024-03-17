<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class ExperimentData extends Data
{
  public function __construct(
    public int $id,
    public string $name,
    public string $date,
    public MachineryData $machinery,
  ) {
  }
}
