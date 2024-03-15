<?php

use App\Models\Experiment;
use App\Models\ExperimentParam;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('experiment_quality_inputs', function (Blueprint $table) {
      $table->foreignIdFor(Experiment::class)->constrained('experiments');
      $table->foreignIdFor(ExperimentParam::class, 'param_id')
        ->constrained('experiment_params');
      $table->string('value');

      $table->primary(['experiment_id', 'param_id']);
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('experiment_quality_inputs');
  }
};
