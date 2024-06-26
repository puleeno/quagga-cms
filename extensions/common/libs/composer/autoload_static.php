<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit43a36414f88abfba922682f393f07d2d
{
    public static $prefixLengthsPsr4 = array (
        'Q' => 
        array (
            'Quagga\\Extension\\Common\\' => 24,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Quagga\\Extension\\Common\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit43a36414f88abfba922682f393f07d2d::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit43a36414f88abfba922682f393f07d2d::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit43a36414f88abfba922682f393f07d2d::$classMap;

        }, null, ClassLoader::class);
    }
}
