<?php

namespace App\Entity;

use App\Entity\interfaces\ElectronicItem;

class ControllerItem extends ElectronicItem 
{
    public function __construct($price, $wired) {
        $this->setType(self::ELECTRONIC_ITEM_CONTROLLER);
        $this->setPrice($price);
        $this->setWired($wired);
    }

    /**
     * Returns number max of extra items
     * @return int
     */
    public function maxExtras() {
        // Controller can't have any extras
        return 0;
    }
}
