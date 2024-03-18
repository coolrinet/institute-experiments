<?php

namespace App\Http\Controllers;

use App\Data\ExperimentParamDetailData;
use App\Models\ExperimentParam;
use Illuminate\Http\Request;

class ExperimentParamController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $experiment_params = ExperimentParamDetailData::collect(
      ExperimentParam::with('machinery')->paginate(6)
    );

    $links = null;

    if ($experiment_params->hasPages()) {
      $links = array_values(
        $experiment_params
          ->getUrlRange(1, $experiment_params->lastPage())
      );
    }

    return inertia('ExperimentParams/Index', [
      'experimentParams' => $experiment_params->items(),
      'links' => $links,
      'nextUrl' => $experiment_params->nextPageUrl(),
      'prevUrl' => $experiment_params->previousPageUrl(),
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
   * Show the form for editing the specified resource.
   */
  public function edit(ExperimentParam $experimentParam)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, ExperimentParam $experimentParam)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(ExperimentParam $experimentParam)
  {
    //
  }
}
