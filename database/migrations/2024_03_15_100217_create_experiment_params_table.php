<?php

use App\Models\Machinery;
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
    Schema::create('experiment_params', function (Blueprint $table) {
      $table->id();
      $table->string('name')->unique();
      $table->boolean('is_output')->default(false);
      $table->boolean('is_quantitative')->default(true);
      $table->foreignIdFor(Machinery::class)->nullable();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('experiment_params');
  }
};
