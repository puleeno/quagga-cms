<?php

namespace App\Constracts\Assets;

use Jackal\Jackal\Assets\AssetUrl;

interface AssetExternalConstract extends AssetConstract
{
    public function setUrl(AssetUrl $url): self;

    public function getUrl();
}
