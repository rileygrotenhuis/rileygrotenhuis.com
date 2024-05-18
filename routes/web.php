<?php

use Illuminate\Support\Facades\Route;

Route::get('/', fn () => inertia('Home/Index'))->name('home');
