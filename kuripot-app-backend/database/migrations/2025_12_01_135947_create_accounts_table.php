<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            // Name of the bank account
            $table->string('name');

            // Type of back account (e-wallet, debit, credit card, cash)
            $table->string('account_type')->nullable();

            // Just some random field
            $table->string('institution_name')->nullable();

            // Starting balance of the account
            $table->double('starting_balance')->default(0);

            // Current balance of the account for calculations
            $table->double('current_balance')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('accounts');
    }
};
