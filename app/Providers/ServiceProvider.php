<?php

namespace App\Providers;

use Quagga\Quagga\Application;

abstract class ServiceProvider
{
    /**
     * The application instance.
     *
     * @var \Quagga\Quagga\Application
     */
    protected $app;


    /**
     * @var \Psr\Container\ContainerInterface
     */
    protected $container;


    public function __construct(Application $app)
    {
        $this->app = $app;
        $this->container = $app->getContainer();
    }

    public function boot()
    {
        // empty function
    }

    abstract public function register();
}
