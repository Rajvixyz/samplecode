<?php

namespace App\Tests;

use PHPUnit\Framework\TestCase;

use App\Entity\Console;
use App\Entity\ControllerItem;
use App\Entity\Television;
use App\Entity\ElectronicItems;
class BuyScenarioTest extends TestCase
{
    public function testSomething(): void
    {
         # 1 console s
        $console = new Console(300);
        # with 2 remote controllers (wired is false)
        $console->add(new ControllerItem(30, false));
        $console->add(new ControllerItem(30, false));
        # with 2 wired controllers (wired is true)
        $console->add(new ControllerItem(30, true));
        $console->add(new ControllerItem(30, true));

        # 2 televisions
        $television1 = new Television(750.5);
        $television2 = new Television(600);
        # TV#1 has 2 remote controllers (wired is false)
        $television1->add(new ControllerItem(30, false));
        $television1->add(new ControllerItem(30, false));
        # TV#2 has 1 remote controller (wired is false)
        $television2->add(new ControllerItem(30, false));

        $eletronicItems = new ElectronicItems([$console, $television1, $television2]);

        echo "\n # Question 1: Total Pricing # \n";
        $sorted = $eletronicItems->getSortedItems("ASC");
        echo $eletronicItems->showItems($sorted);
        echo "Total price: " . $eletronicItems->getTotalPrice();
        echo "\n\n# Question 2 - Purchase Info #\n";
        echo $console->getPurchaseInfo();
        $this->assertTrue(true);
    }
}
