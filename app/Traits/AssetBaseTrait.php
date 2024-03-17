<?php

namespace App\Traits;

use App\Constracts\Assets\AssetOptionsConstract;
use Jackal\Jackal\Assets\AssetOptions;
use Jackal\Jackal\Helper;

trait AssetBaseTrait
{
    protected AssetOptionsConstract $options;

    public function getOptions(): ?AssetOptionsConstract
    {
        return $this->options;
    }

    public function getOption($name, $defaultValue = null, $classObject = null)
    {
        /**
         * @var \App\Constracts\Assets\AssetOptionsConstract
         */
        $options = $this->getOptions() ?? new AssetOptions();
        $value   = $options->$name ?? $defaultValue;

        if (is_array($value) && !is_null($classObject)) {
            return Helper::convertArrayValuesToObject($value, $classObject);
        }

        return $value;
    }
}
