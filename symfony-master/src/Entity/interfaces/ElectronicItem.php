<?php


namespace App\Entity\interfaces;

abstract class ElectronicItem 
{
    /**
     * @var float
     */
    public $price;

    /**
     * @var string
     */
    private $type;
    public $wired;

    const ELECTRONIC_ITEM_TELEVISION = 'Television';
    const ELECTRONIC_ITEM_CONSOLE = 'Console';
    const ELECTRONIC_ITEM_MICROWAVE = 'Microwave';
    const ELECTRONIC_ITEM_CONTROLLER = 'Controller';

    private static $types = array(
        self::ELECTRONIC_ITEM_CONSOLE,
        self::ELECTRONIC_ITEM_MICROWAVE, 
        self::ELECTRONIC_ITEM_TELEVISION, 
        self::ELECTRONIC_ITEM_CONTROLLER
    );
    
    /**
     * The Component class can provide some default implementation for these methods
     */
    function getPrice()
    {
        return $this->price;
    }

    function getType()
    {
        return $this->type;
    }

    function getWired()
    {
        return $this->wired;
    }

    function setPrice($price)
    {
        $this->price = $price;
    }

    function setType($type)
    {
        $this->type = $type;
    }

    function setWired($wired)
    {
        $this->wired = $wired;
    }

  
    public abstract function maxExtras();


}