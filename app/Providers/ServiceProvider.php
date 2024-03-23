<?php

namespace App\Providers;

use Jackal\Jackal\Application;

abstract class ServiceProvider
{
    /**
     * The application instance.
     *
     * @var \Jackal\Jackal\Application
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
