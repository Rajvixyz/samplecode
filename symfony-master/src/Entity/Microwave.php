<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */

namespace App\Entity;

use App\Entity\interfaces\ElectronicItem;

class Microwave extends ElectronicItem {

    public function __construct($price) {
        $this->setType(self::ELECTRONIC_ITEM_MICROWAVE);
        $this->setPrice($price);
        $this->setWired(true);
    }

    /**
     * Returns max number of items
     * @return int
     */
    public function maxExtras() {
        # Microwave can't have any extras
        return 0;
    }
    
}
