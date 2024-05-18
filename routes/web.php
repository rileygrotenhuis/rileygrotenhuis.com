<?php

use App\Http\Controllers\ContactMessageController;
use Illuminate\Support\Facades\Route;

Route::get('/', fn () => inertia('Home/Index'))->name('home');

Route::post('/contact-message', ContactMessageController::class)->name('send-contact-message');
