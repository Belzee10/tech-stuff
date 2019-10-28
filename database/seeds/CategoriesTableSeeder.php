<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Category::class, 5)->create()->each(function ($c) {
            $c->products()->createMany(
                factory(App\Product::class, 5)->make()->toArray()
            );
        });        
    }
}
