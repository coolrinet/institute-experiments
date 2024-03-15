<?php

use App\Http\Controllers\ExperimentController;
use App\Http\Controllers\ExperimentParamController;
use App\Http\Controllers\MachineryController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Welcome');

Route::resource('experiments', ExperimentController::class);

Route::resource('machineries', MachineryController::class)->except('show');

Route::resource('experiment_params', ExperimentParamController::class)->except('show');
