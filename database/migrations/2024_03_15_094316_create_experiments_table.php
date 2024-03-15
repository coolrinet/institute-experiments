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
    Schema::create('experiments', function (Blueprint $table) {
      $table->id();
      $table->string('name')->unique();
      $table->date('date');
      $table->foreignIdFor(Machinery::class)->constrained('machineries');
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('experiments');
  }
};
