<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\AdminInfo;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminAccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $account_info = AdminInfo::create([
            'first_name' => 'Yvan',
            'middle_name' => 'Caindoy',
            'last_name' => 'Sabay',
            'gender' => 'Male',
            'contact_number' => '09355310166',
        ]);

        Admin::create([
            'email' => 'sabayyvan2018@gmail.com',
            'password' => Hash::make('123123'),
            'admin_info_id' => $account_info->id
        ]);

    }
}
