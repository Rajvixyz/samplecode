<?php

namespace App\Entity;

use App\Entity\interfaces\ElectronicItem;

class Television extends ElectronicItem {
    /**
     * List of eletronic items attached to an item that 
     * complement (compose) it
     * @var array
     */
    private $extraItems = array();

    public function __construct($price) {
        $this->setType(self::ELECTRONIC_ITEM_TELEVISION);
        $this->setPrice($price);
        $this->setWired(true);
    }

    /**
     * Returns number of extra items
     * @return float
     */
    public function maxExtras() {
        return INF;
    }

    /**
     * @param Electronic $item 
     * @return void
     */
    public function add(ElectronicItem $item) {
        # Television has no maximum extras
        $this->extraItems[] = $item;
    }

    /**
     * @param ElectronicItem $item 
     * @return void
     */
    public function remove(ElectronicItem $item) {
        $extraItems = array();
        foreach ($this->extraItems as $extra) {
            if ($item !== $item) {
                $extraItems[] = $extra;
            }
        }
        $this->extraItems = $extraItems;
    }

    /**
     * Returns the sum of prices of Television and its extras items
     * @return float
     */
    public function getPrice() {
        $sum = parent::getPrice();
        foreach ($this->extraItems as $extraItem) {
            $sum += $extraItem->getPrice();
        }
        return $sum;
    }
}
