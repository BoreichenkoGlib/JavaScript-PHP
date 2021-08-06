<?php

class Model_Portfolio extends Model
{
	
	public function get_data()
	{
		
		return array(
			
			array(
				'Year' => '2019',
				'Site' => 'https://espreso.tv/',
				'Description' => 'сайт новин'
			),

			array(
				'Year' => '2020',
				'Site' => 'https://www.pravda.com.ua/',
				'Description' => 'сайт новин'
			),
		);
	}

}
