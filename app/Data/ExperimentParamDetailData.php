<?php

namespace App\Data;

use Spatie\LaravelData\Attributes\MapInputName;
use Spatie\LaravelData\Data;

class ExperimentParamDetailData extends Data
{
  public function __construct(
    public string $id,
    public string $name,
    #[MapInputName('is_output')]
    public ?bool $isOutput,
    #[MapInputName('is_quantitative')]
    public ?bool $isQuantitative,
    public ?MachineryData $machinery
  ) {
  }
}
