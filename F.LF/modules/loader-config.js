define({
	lazyload: function(folder,O)
	{	//return true to delay loading of data files
		if( folder==='object')
		{
			switch (O.type)
			{
				case 'character':
					return false;
				case 'specialattack':
					return false;
			}
		}
		else if( folder==='background')
		{
			return false;
		}
		else if ( folder==='AI')
		{
			return false;
		}
		return false;
	}
});
