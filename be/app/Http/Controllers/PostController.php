<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Models\Update;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return response()->json(Update::paginate(10));
    }

    public function store(PostRequest $request)
    {
        Update::create($request->validated());
        return $this->success('Update created successfully!');
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        Update::destroy($id);
        return $this->success('Update deleted successfully!');

    }
}
