<?php

namespace App\Http\Controllers;

use App\Http\Requests\SendContactMessage;
use App\Models\ContactMessage;
use Illuminate\Http\RedirectResponse;

class ContactMessageController extends Controller
{
    public function __invoke(SendContactMessage $request): RedirectResponse
    {
        ContactMessage::query()->create($request->validated());

        return to_route('home');
    }
}
