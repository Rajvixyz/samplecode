<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Console;
use App\Entity\ElectronicItems;
use App\Entity\ControllerItem;
use App\Entity\Television;
use App\Entity\Microwave;
class IndexController extends AbstractController {

    #[Route('/index', name: 'app_index')]
    public function index(): Response {
        return $this->render('index/index.html.twig', [
                    'controller_name' => 'IndexController',
        ]);
    }
     
    
    #[Route('/testscenario', name: 'app_testscenario')]
    public function testscenario(): Response {
        # 1 console s
        $console = new Console(350);
        # with 2 remote controllers (wired is false)
        $console->add(new ControllerItem(50, false));
        $console->add(new ControllerItem(50, false));
        # with 2 wired controllers (wired is true)
        $console->add(new ControllerItem(30, true));
        $console->add(new ControllerItem(30, true));

        # 2 televisions
        $television1 = new Television(750.5);
        $television2 = new Television(600);
        # TV#1 has 2 remote controllers (wired is false)
        $television1->add(new ControllerItem(50, false));
        $television1->add(new ControllerItem(50, false));
        # TV#2 has 1 remote controller (wired is false)
        $television2->add(new ControllerItem(30, false));
        
        # 1 Microwave
        $microwave=new Microwave(800);
       
        $eletronicItems = new ElectronicItems([$console, $television1, $television2,$microwave]);
        $sorted = $eletronicItems->getSortedItems("ASC");
        

        
         return $this->render('index/scenario.html.twig', [
                    'controller_name' => 'IndexController','eletronicItems'=>$eletronicItems->showItems($sorted),
                       'console'=>$console,'total_price'=>$eletronicItems->getTotalPrice()
        ]);
    }

}
