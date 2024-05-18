<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactMessage extends Model
{
    use HasFactory;

    protected $table = 'contact_messages';

    protected $fillable = [
        'name',
        'email',
        'phone',
        'message',
        'has_read',
    ];

    public function casts(): array
    {
        return [
            'has_read' => 'boolean',
        ];
    }

    public function scopeUnread(Builder $query): void
    {
        $query->where('has_read', false);
    }

    public function scopeRead(Builder $query): void
    {
        $query->where('has_read', true);
    }

    public function markAsRead(): void
    {
        $this->has_read = true;
        $this->save();
    }
}
