<?php

namespace App\Http\Controllers;

use App\Data\ExperimentData;
use App\Data\ExperimentParamData;
use App\Models\Experiment;
use Illuminate\Http\Request;

class ExperimentController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $experiments = ExperimentData::collect(Experiment::all());

    return inertia('Experiments/Index', [
      'experiments' => $experiments,
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   */
  public function show(Experiment $experiment)
  {
    $input_params = ExperimentParamData::collect($experiment->inputs());

    $output_params = ExperimentParamData::collect(
      $experiment->outputs()
        ->with('experiment_param:id,name')
        ->get()
    );

    return inertia('Experiments/Show', [
      'experiment' => ExperimentData::from($experiment),
      'inputParams' => $input_params,
      'outputParams' => $output_params,
    ]);

    return inertia('Experiments/Show', [
      'experiment' => ExperimentData::from($experiment),
      'inputParams' => $input_params,
      'outputParams' => $output_params,
    ]);
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Experiment $experiment)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Experiment $experiment)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Experiment $experiment)
  {
    //
  }
}
