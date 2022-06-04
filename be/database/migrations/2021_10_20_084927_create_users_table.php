<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('student_number', 40);
            $table->string('email')->unique();
            $table->string('password');
            $table->integer('unreadCount')->default(0);
            $table->foreignId('user_info_id')->constrained()->onDelete('cascade');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('status', 10)->default('Pending');
            $table->string('enrollment_status', 25);
            $table->string('tes_status', 45);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
