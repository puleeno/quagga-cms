<?php

namespace App\Http\Controllers;

use Quagga\Quagga\HookManager;
use Psr\Http\Message\ResponseInterface;

class HomeController extends Controller
{
    public function index(ResponseInterface $response): ResponseInterface
    {
        return view(
            HookManager::applyFilters('home_template', 'pages/home'),
            HookManager::applyFilters('home_data', [])
        );
    }
}
