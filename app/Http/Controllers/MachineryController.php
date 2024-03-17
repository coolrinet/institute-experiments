<?php

namespace App\Http\Controllers;

use App\Data\MachineryData;
use App\Models\Machinery;
use Illuminate\Http\Request;

class MachineryController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $machineries = MachineryData::collect(Machinery::all());

    return inertia('Machineries/Index', [
      'machineries' => $machineries,
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
  public function edit(Machinery $machinery)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Machinery $machinery)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Machinery $machinery)
  {
    //
  }
}
