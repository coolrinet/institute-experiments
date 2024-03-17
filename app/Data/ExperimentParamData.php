<?php

namespace App\Data;

use Spatie\LaravelData\Attributes\MapInputName;
use Spatie\LaravelData\Data;

class ExperimentParamData extends Data
{
  public function __construct(
    #[MapInputName('experiment_param')]
    public ExperimentParamDetailData $paramDetail,
    public float | string $value,
  ) {
  }
}
