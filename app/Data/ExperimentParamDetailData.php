<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class ExperimentParamDetailData extends Data
{
  public function __construct(
    public string $id,
    public string $name,
    public ?bool $isOutput,
    public ?bool $isQuantitative,
    public ?MachineryData $machinery
  ) {
  }
}
