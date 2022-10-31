<?php
namespace App\Entity;


class ElectronicItems
{
    private $items = array();
    

    public function __construct(array $items)
    {
        $this->items = $items;
    }

    /**
     * Returns the items depending on the sorting type requested
     * @param string $type Sorting type 
     * @return array
     */
    public function getSortedItems($type = "ASC")
    {
        $sorted = array();
        foreach ($this->items as $item)
        {
            $sorted[($item->price * 100)] = $item;
        }

        ($type == "ASC") ? ksort($sorted, SORT_NUMERIC) : krsort($sorted, SORT_NUMERIC);

        return $sorted;
    }
    
    /**
     * @param string $type
     * @return array
     */
    public function getItemsByType($type)
    {
        if (in_array($type, EletronicItem::$types))
        {
            $callback = function($item) use ($type)
            {
                return $item->type == $type;
            };
            $items = array_filter($this->items, $callback);
        }
        return false;
    }

    /**
     * Returns the total price of items
     * @return float
     */
    public function getTotalPrice() {
        $sum = 0.0;
        foreach ($this->items as $item) {
            $sum += $item->getPrice();
        }
        return $sum;
    }

    /**
     * @param array $items List of items
     * @return string
     */
    public function showItems($items) {
        $purched_items=array();
        $int=0;
        foreach ($items as $item) {
            $purched_items[$int]['Item']=$item->getType();
            $purched_items[$int]['Price']=$item->getPrice();
           $int++; 
        }
        return $purched_items;
    }
}
