class SceneSaveHook extends SaveAssetsProcessor {
	static function OnWillSaveAssets(paths : String[]) : String[] {
        for (var path : String in paths) {
        	if (path.EndsWith(".unity")) {
				for (var placeholder : GameObject in GameObject.FindGameObjectsWithTag("Placeholder")) {
					GameObject.DestroyImmediate(placeholder);
				}
        	}
        }
        return paths;
	}
}
