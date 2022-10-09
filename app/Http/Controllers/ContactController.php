<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index(){
        return view('pages.add_to_contact');
    }

    public function store(Request $request){
        return $request;

    }
}
