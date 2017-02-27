define(function(require){
	var service = {};
	service.categories = [
		{
			id: 1,
			name: "residential"
		},
		{
			id: 2,
			name: "commercial"
		},
		{
			id: 3,
			name: "interiors"
		},
		{
			id: 4,
			name: "speculative"
		}
	];
	service.projects = [
		{
			alias: "taslimi_residence",
			name: "Taslimi Residence",
			location: "SANTA MONICA CA",
			description: "<p>The design of this 5,600 square foot single family home in Santa Monica was rooted in a keen awareness of site and landscape and a dedication to sustainable architecture. After living in the neighborhood for over 30 years, the clients decided to build a new house that would more completely engage the landscape while seeking the highest certification offered by the U.S. Green Building Council. Designed as a linear sequence, the house unfolds as a series of spaces that are completely open to the landscape. Large expanses of glass walls pocket away allowing rooms to blur the distinction between outside and in.  Fleetwood / Fernandez was responsible for the architecture as well as the interior design, which in addition to the sustainable finishes inherent to this type of project, features a curated selection of furnishings with many vintage pieces that extend the  spirit of reuse.</p>",
			thumbnail: "img/projects/tat_house/TAT_thumbnail.jpg",
			categories: ["residential"],
			assets: [
				{
					path: "img/projects/tat_house/TAT_01.jpg"
				},
				{
					path: "img/projects/tat_house/TAT_02.jpg"
				},
				{
					path: "img/projects/tat_house/TAT_03.jpg"
				},
				{
					path: "img/projects/tat_house/TAT_04.jpg"
				},
				{
					path: "img/projects/tat_house/TAT_05.jpg"
				},
				{
					path: "img/projects/tat_house/TAT_06.jpg"
				},
				{
					path: "img/projects/tat_house/TAT_07.jpg"
				},
				{
					path: "img/projects/tat_house/TAT_08.jpg"
				},
				{
					path: "img/projects/tat_house/TAT_09.jpg"
				},
				{
					path: "img/projects/tat_house/TAT_10.jpg"
				},
				{
					path: "img/projects/tat_house/TAT_11.jpg"
				},
				{
					path: "img/projects/tat_house/TAT_12.jpg"
				},
				{
					path: "img/projects/tat_house/TAT_13.jpg"
				},
				{
					path: "img/projects/tat_house/TAT_14.jpg"
				},
				{
					path: "img/projects/tat_house/TAT_15.jpg"
				},
				{
					path: "img/projects/tat_house/TAT_16.jpg"
				},
				{
					path: "img/projects/tat_house/TAT_17.jpg"
				}
			],
			external: [
				{
					label: "VIEW SUSTAINABLE FEATURES",
					path: "assets/TAT_sustainable features.pdf"
				}
			]
		},
		{
			alias: "lsh",
			name: "Lighthouse Sea Hotel Competition",
			location: "Sicily, Italy",
			description: "<p><i>Work stops at sunset. Darkness falls over the building site. The sky is filled with stars. \“There is the blueprint,\” they say.</i></p><p>Italo Calvino</p><p>Invisible Cities<p>As far back as Piranesi’s depictions of Rome’s remains, artists and writers have found creative inspiration in abandoned sites and crumbling buildings. Urban and architectural ruins are a testimony of the passage of time, providing a canvas for imagining the site’s history while igniting the imagination with the promise of its future. The missing parts or voids become loaded with meaning as they hold the key to the site’s interpretation, a narrative unique to each observer. To uncover the potential of those narratives, the Lighthouse Sea Hotel becomes a destination for artists and writers. It will host art exhibits temporary and permanent; provide artist in residency programs; and house faculty and students of creative workshops. The architecture for this intervention takes clues both from the language of the site’s remains, and from the architectural vernacular and materials of the area. The building form is laid out in a long sequential path, creating a communal space with the ruins at its center and bound naturally by the coastline. Actual voids in the slab and the roof and screened facades allow the landscape to permeate the structures in all directions. The material cladding the building is a roman flat pan clay tile, used whole on the solid facades, and modified with diagonal cuts to create screens on the translucent facades.</p>",
			thumbnail: "img/projects/lighthouse_sea_hotel/LSH_thumbnail.jpg",
			categories: ["commercial"],
			assets: [
				{
					path: "img/projects/lighthouse_sea_hotel/LSH_01.jpg"
				},
				{
					path: "img/projects/lighthouse_sea_hotel/LSH_02.jpg"
				},
				{
					path: "img/projects/lighthouse_sea_hotel/LSH_03.jpg"
				},
				{
					path: "img/projects/lighthouse_sea_hotel/LSH_04.jpg"
				},
				{
					path: "img/projects/lighthouse_sea_hotel/LSH_05.jpg"
				},
				{
					path: "img/projects/lighthouse_sea_hotel/LSH_06.jpg"
				},
				{
					path: "img/projects/lighthouse_sea_hotel/LSH_07.jpg"
				}
			]
		},
		{
			alias: "dumpster",
			name: "Dumpster",
			location: "BROOKLYN, NY",
			description: "<p>After moving to a smaller studio, artist Mac Premo was faced with the dilemma of disposing of a lifetime of archived personal artifacts. He decided instead to create the largest collage he had ever made using a 30 yard dumpster as the canvas. The Dumpster’s first installation was at The Dumbo Arts Festival in New York in September 2011 and has since traveled widely, including to Pulse Miami Contemporary Art Fair. We designed a translucent, elastic membrane roof over a custom metal frame. The roof is light, can be easily assembled and disassembled, allows natural light in, and becomes a glowing beacon at night.</p>",
			thumbnail: "img/projects/the_dumpster_project/DUMPSTER_thumbnail.jpg",
			categories: ["speculative"],
			assets: [
				{
					path: "img/projects/the_dumpster_project/DUMPSTER_01.jpg"
				},
				{
					path: "img/projects/the_dumpster_project/DUMPSTER_02.jpg"
				},
				{
					path: "img/projects/the_dumpster_project/DUMPSTER_03.jpg"
				},
				{
					path: "img/projects/the_dumpster_project/DUMPSTER_04.jpg"
				},
				{
					path: "img/projects/the_dumpster_project/DUMPSTER_05.jpg"
				},
				{
					path: "img/projects/the_dumpster_project/DUMPSTER_06.jpg"
				},
				{
					path: "img/projects/the_dumpster_project/DUMPSTER_07.jpg"
				},
				{
					path: "img/projects/the_dumpster_project/DUMPSTER_08.jpg"
				},
				{
					path: "img/projects/the_dumpster_project/DUMPSTER_09.jpg"
				}
			]
		},
		{
			alias: "yellowfeverII",
			name: "Yellow Fever II",
			location: "Venice, CA",
			description: "<p>The second location of this ever-popular restaurant has grown up a bit while still retaining the cool and playful atmosphere of the original. It continues the industrial yet crafted theme, but picks up on the beach vibes of its new location, near Venice Beach. A bold geometric mural helps identify the unremarkable building envelope on a busy boulevard and blends it with several of its graffitied neighbors. The interior is left intentionally white and light with an uninterrupted plywood element that spans the entire length of the space, transforming from an intimate eating nook by the front door into a long bench, and terminating as a communal high bar table near the back door.</p><p>The patio contributes to the relaxed seaside atmosphere with a dining table that doubles as a Ping-Pong table and native greenery throughout.</p>",
			thumbnail: "img/projects/yellow_fever_II/YF2_thumbnail.jpg",
			categories: ["commercial"],
			assets: [
				{
					path: "img/projects/yellow_fever_II/YF2_01.jpg"
				},
				{
					path: "img/projects/yellow_fever_II/YF2_02.jpg"
				},
				{
					path: "img/projects/yellow_fever_II/YF2_03.jpg"
				},
				{
					path: "img/projects/yellow_fever_II/YF2_04.jpg"
				},
				{
					path: "img/projects/yellow_fever_II/YF2_05.jpg"
				},
				{
					path: "img/projects/yellow_fever_II/YF2_06.jpg"
				},
				{
					path: "img/projects/yellow_fever_II/YF2_07.jpg"
				},
				{
					path: "img/projects/yellow_fever_II/YF2_08.jpg"
				},
				{
					path: "img/projects/yellow_fever_II/YF2_09.jpg"
				},
				{
					path: "img/projects/yellow_fever_II/YF2_10.jpg"
				},
				{
					path: "img/projects/yellow_fever_II/YF2_11.jpg"
				},
				{
					path: "img/projects/yellow_fever_II/YF2_12.jpg"
				},
				{
					path: "img/projects/yellow_fever_II/YF2_13.jpg"
				}
			]
		},
		{
			alias: "southamptonResidence",
			name: "Southampton Residence",
			location: "Southampton, NY",
			description: "<p>In Permit Phase. More information coming soon.</p>",
			thumbnail: "img/projects/southampton/Southampton_thumbnail.png",
			categories: ["commercial"],
			assets: [
				{
					path: "img/projects/southampton/Southampton_1.jpg"
				},
				{
					path: "img/projects/southampton/Southampton_2.jpg"
				},
				{
					path: "img/projects/southampton/Southampton_3.jpg"
				},
				{
					path: "img/projects/southampton/Southampton_4.jpg"
				},
				{
					path: "img/projects/southampton/Southampton_5.jpg"
				}
			]
		},
		{
			alias: "food",
			name: "FOOD",
			location: "LOS ANGELES, CA",
			description: "<p>The design for a market and café in the eclectic neighborhood of Rancho Park reflects the client’s approach to food: simple and fun.  As a reference to the small but legendary restaurant started by Gordon Matta Clark in Soho, the owner wanted a space that was unique and community oriented. The open and inviting space makes use of simple materials such as plywood and concrete. The existing wood framing and floor slab were exposed to add to the unpretentious flavor.  In an effort to draw attention to a nondescript commercial block, the storefront was painted bright red, and a window was added to reveal activity in the kitchen.  In addition to the café function, the renovation accommodates an office, storage, and a kitchen large enough to service the client’s catering business.</p>",
			thumbnail: "img/projects/food/FOOD_thumbnail.jpg",
			categories: ["commercial"],
			assets: [
				{
					path: "img/projects/food/FOOD_01.jpg"
				},
				{
					path: "img/projects/food/FOOD_02.jpg"
				},
				{
					path: "img/projects/food/FOOD_03.jpg"
				},
				{
					path: "img/projects/food/FOOD_04.jpg"
				},
				{
					path: "img/projects/food/FOOD_05.jpg"
				},
				{
					path: "img/projects/food/FOOD_06.jpg"
				},
				{
					path: "img/projects/food/FOOD_07.jpg"
				},
				{
					path: "img/projects/food/FOOD_08.jpg"
				},
				{
					path: "img/projects/food/FOOD_09.jpg"
				}
			]
		},
		{
			alias: "balhouse",
			name: "BAL House",
			location: "LA GRAñA, Spain",
			description: "<p>The house began as a studio for an artist. Situated on a hillside overlooking the Atlantic Ocean, the project takes advantage of striking views while providing an appropriate space for painting and displaying the artist’s work. In addition to the art studio, the program includes accommodations for visiting family. The site is a heavily graded, narrow, south facing parcel with strenuous zoning restrictions. The footprint of the project evolved from these unique programmatic and physical requirements.  Responding to the dichotomous relationships contained in the program, the house developed as a series of dialogues between paired elements. As the central component, the studio acts as a container by which all other spaces are enclosed. On the exterior, an economy of materials dominated by pigmented, cast in place concrete heightens the simplicity of form.</p>",
			thumbnail: "img/projects/bal_house/BAL_thumbnail.jpg",
			categories: ["residential"],
			assets: [
				{
					path: "img/projects/bal_house/BAL_01.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_02.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_04.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_05.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_06.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_07.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_08.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_09.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_10.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_03.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_11.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_12.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_13.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_14.jpg"
				}
			]
		},
		{
			alias: "trekkingCabin",
			name: "Trekking Cabin",
			location: "Iceland",
			description: "<p><i>King Harald told a warlock to hike to Iceland in some altered shape, and to try what he could learn there to tell him: and he set out in the shape of a whale. And when he came near to the land he went to the west side of Iceland, north around the land, where he saw all the mountains and hills full of guardian-spirits, some great, some small.</i></p><p>Snorri Sturluson, Heimskringla</p><p>Steeped in mythology and surrounded by an intensely diverse ecology, Iceland’s landscape and history cannot be summarized briefly. Its position at a critical nexus of geography and culture has produced a rich array of narratives that include epic heroes, conquering villains, and mystical protectors called landvættir that many believe still inhabit the land.</p><p>Seeking to create an emblematic expression which references this history, our proposal takes the form of a figural tower that surveys the landscape. Like the landvættir, we envision the cabins as protagonists in the wilderness, with a distinctive presence. The cabins are elevated creating access from below while allowing for a delicate foundation that can be adapted to many different terrains. Construction is simple, produced with standard milled timber in sizes that can be easily transported to remote locations. Interior spaces, inspired by the landscape, are vibrantly colored striking a contrast with the monochrome exterior. Sleeping spaces flow vertically, culminating in a dramatic viewing platform on the roof.</p>",
			thumbnail: "img/projects/trekking_cabin/Trekking_thumbnail.png",
			categories: ["commercial"],
			assets: [
				{
					path: "img/projects/trekking_cabin/Trekking_01.jpg"
				},
				{
					path: "img/projects/trekking_cabin/Trekking_02.jpg"
				},
				{
					path: "img/projects/trekking_cabin/Trekking_03.jpg"
				},
				{
					path: "img/projects/trekking_cabin/Trekking_04.jpg"
				},
				{
					path: "img/projects/trekking_cabin/Trekking_05.jpg"
				}
			]
		},
		{
			alias: "solloft",
			name: "SOL Loft",
			location: "SANTA MONICA, CA",
			description: "<p>A bachelor’s traditional ocean front one bedroom flat is transformed into a beach loft.  The client, an avid surfer, wanted open living spaces and uninterrupted views of the ocean.  This was achieved by synthesizing the service functions into an efficient core, while removing all unnecessary partitions. The resultant spaces are flexible and fluid. Exposing the existing concrete structure allowed for taller ceiling heights at the window walls, drawing light deeper into the space.</p>",
			thumbnail: "img/projects/sol_loft/SOL_thumbnail.jpg",
			categories: ["residential"],
			assets: [
				{
					path: "img/projects/sol_loft/SOL_01.jpg"
				},
				{
					path: "img/projects/sol_loft/SOL_02.jpg"
				},
				{
					path: "img/projects/sol_loft/SOL_03.jpg"
				},
				{
					path: "img/projects/sol_loft/SOL_04.jpg"
				},
				{
					path: "img/projects/sol_loft/SOL_05.jpg"
				}
			]
		},
		{
			alias: "winterStations",
			name: "Winterstations (Beyond Refuge)",
			location: "Toronto, Canada",
			description: "<p>As much a functional element as a poetic symbol, the lifeguard station stands alone and vigilant in the landscape. But in the larger context, what can we learn from the lifeguard tower? How can we utilize this duality and allow it to focus our attention on issues outside our view? Inequality of opportunity, violent conflict and the scarcity of resources together have generated the largest migrant crisis humanity has ever witnessed. A frightening crescendo in 2015 and 2016 has produced millions of refugees worldwide. Our proposal seeks to harness the significance of the lifeguard station to illuminate this issue for what it is; a humanitarian crisis.</p><p>Underneath an ephemeral shroud lies a chaotic assembly of life preservers that cling precariously to the stand. While engaging the shelter, beachgoers must pass through the chaos and up to the perch to look upon the sea with a changed perspective.</p>",
			thumbnail: "img/projects/winter_stations/Winterstations_thumbnail.png",
			categories: ["commercial"],
			assets: [
				{
					path: "img/projects/winter_stations/Winterstations_01.jpg"
				},
				{
					path: "img/projects/winter_stations/Winterstations_02.jpg"
				},
				{
					path: "img/projects/winter_stations/Winterstations_03.jpg"
				}
			]
		},
		{
			alias: "yellowfever",
			name: "Yellow Fever",
			location: "TORRANCE, CA",
			description: "<p>The owners of this casual Asian food restaurant wanted a space aligned with their mission to offer good-tasting, healthful cuisine inspired by a mash up of American and Asian cultures. Featuring a combination of industrial materials and more expressive finishes like handmade wood furniture and ceramic tile, the restaurant finds its focal point above the banquette seating with an organic installation of hundreds of melamine bowls. The urban counterculture character of the space is reflected in details throughout: metal wire seating, bare bulb pendants in bright colors, exposed ductwork, and site specific commissioned artwork by local artists.</p>",
			thumbnail: "img/projects/yellow_fever/YF_thumbnail.jpg",
			categories: ["commercial"],
			assets: [
				{
					path: "img/projects/yellow_fever/YF_01.jpg"
				},
				{
					path: "img/projects/yellow_fever/YF_02.jpg"
				},
				{
					path: "img/projects/yellow_fever/YF_03.jpg"
				},
				{
					path: "img/projects/yellow_fever/YF_04.jpg"
				},
				{
					path: "img/projects/yellow_fever/YF_05.jpg"
				},
				{
					path: "img/projects/yellow_fever/YF_06.jpg"
				},
				{
					path: "img/projects/yellow_fever/YF_07.jpg"
				},
				{
					path: "img/projects/yellow_fever/YF_08.jpg"
				},
				{
					path: "img/projects/yellow_fever/YF_09.jpg"
				},
				{
					path: "img/projects/yellow_fever/YF_10.jpg"
				}
			]
		},
		{
			alias: "rayhouse",
			name: "RAY House",
			location: "SANTA MONICA, CA",
			description: "<p>This is a two phase project involving the complete transformation of two buildings on the same lot in the historic Ocean Park district of Santa Monica. Dating from 1920, the structures were in need of a complete renovation that would also incorporate state of the art sustainable and energy efficient features. One at a time, the two buildings will become home to the clients as well as their extended family. The design strategy follows the constraints imposed by the city planning guidelines, and at the same time establishes a dialogue between the two structures that emphasizes privacy.  Openings were carefully placed to allow for light and views while maintaining discreet separation. Each home has a distinct private outdoor area but is also connected through a central, shared green zone.</p>",
			thumbnail: "img/projects/ray_house/RAY_thumbnail.jpg",
			categories: ["residential"],
			assets: [
				{
					path: "img/projects/ray_house/RAY_01.jpg"
				},
				{
					path: "img/projects/ray_house/RAY_02.jpg"
				},
				{
					path: "img/projects/ray_house/RAY_03.jpg"
				},
				{
					path: "img/projects/ray_house/RAY_04.jpg"
				},
				{
					path: "img/projects/ray_house/RAY_05.jpg"
				},
				{
					path: "img/projects/ray_house/RAY_06.jpg"
				},
				{
					path: "img/projects/ray_house/RAY_07.jpg"
				},
				{
					path: "img/projects/ray_house/RAY_08.jpg"
				},
				{
					path: "img/projects/ray_house/RAY_09.jpg"
				},
				{
					path: "img/projects/ray_house/RAY_10.jpg"
				}
			]
		},
		{
			alias: "mashouse",
			name: "MAS House",
			location: "LOS ANGELES, CA",
			description: "<p>This mid-century modern two story house had suffered through unfortunate transformations in the eighties that obscured its original design but thankfully left the basic structure and window configuration intact. A careful removal of walls to eliminate obsolete circulation, the relocation of the kitchen and the reconfiguration of some of the bedrooms was all the construction needed to restore the home to the spirit of its era. The same agenda of simplicity and integration with nature guided the design for the new kitchen and bathrooms, and the selection for all finishes throughout.</p>",
			thumbnail: "img/projects/mas_house/MAS_thumbnail.jpg",
			categories: ["residential"],
			assets: [
				{
					path: "img/projects/mas_house/MAS_01.jpg"
				},
				{
					path: "img/projects/mas_house/MAS_02.jpg"
				},
				{
					path: "img/projects/mas_house/MAS_03.jpg"
				},
				{
					path: "img/projects/mas_house/MAS_04.jpg"
				},
				{
					path: "img/projects/mas_house/MAS_05.jpg"
				},
				{
					path: "img/projects/mas_house/MAS_06.jpg"
				},
				{
					path: "img/projects/mas_house/MAS_07.jpg"
				}
			]
		},
		{
			alias: "hillstoneRestaurant",
			name: "Hillstone Restaurant Group",
			location: "MULTIPLE LOCATIONS",
			description: "<p>Hillstone Restaurant Group owns several successful high-end dining establishments throughout the country, including the beloved Houston’s restaurants. Family owned and operated since 1976, HRG is also a supporter of art and architecture, seamlessly blending both into carefully crafted dining environments. Fleetwood/Fernandez has collaborated with the company’s design and construction team on several projects in New York and California, and is currently working on two new restaurants.</p>",
			thumbnail: "img/projects/hillstone_restaurant_group/HRG_thumbnail.jpg",
			categories: ["commercial"],
			assets: [
				{
					path: "img/projects/honor_wine_spirits/HON_01.jpg"
				},
				{
					path: "img/projects/honor_wine_spirits/HON_02.jpg"
				},
				{
					path: "img/projects/honor_wine_spirits/HON_03.jpg"
				},
				{
					path: "img/projects/honor_wine_spirits/HON_04.jpg"
				},
				{
					path: "img/projects/honor_wine_spirits/HON_05.jpg"
				},
				{
					path: "img/projects/honor_wine_spirits/HON_06.jpg"
				},
				{
					path: "img/projects/honor_wine_spirits/HON_07.jpg"
				},
				{
					path: "img/projects/honor_wine_spirits/HON_08.jpg"
				},
				{
					path: "img/projects/honor_wine_spirits/HON_09.jpg"
				},
				{
					path: "img/projects/hillstone_restaurant_group/HRG_01.jpg"
				},
				{
					path: "img/projects/hillstone_restaurant_group/HRG_02.jpg"
				},
				{
					path: "img/projects/hillstone_restaurant_group/HRG_03.jpg"
				},
				{
					path: "img/projects/hillstone_restaurant_group/HRG_04.jpg"
				},
				{
					path: "img/projects/hillstone_restaurant_group/HRG_05.jpg"
				},
				{
					path: "img/projects/hillstone_restaurant_group/HRG_06.jpg"
				}
			]
		},
		{
			alias: "thelocal",
			name: "The Local",
			location: "HYPOTHETICAL SITE",
			description: "<p>What if a community fails to interact? Los Angeles is an accidental urban model; a disparate network of communities scaled according to the automobile. The by-products of this vehicular model have amounted to an unending sprawl coupled with a dystopian lack of public space. The recent widespread closing of car dealerships presents a twofold opportunity to rectify these deficiencies. Their ubiquity insures access, while their inordinate size affords them flexibility.  Our proposal utilizes the familiar module of a parking space to organize our site and co-opts these abandoned commercial lots absorbing them into the public sphere.</p>",
			thumbnail: "img/projects/the_local/thumbnail.jpg",
			categories: ["speculative"],
			assets: [
				{
					path: "img/projects/the_local/Local_04.jpg"
				},
				{
					path: "img/projects/the_local/Local_01.jpg"
				},
				{
					path: "img/projects/the_local/Local_02.jpg"
				},
				{
					path: "img/projects/the_local/Local_03.jpg"
				},
				{
					path: "img/projects/the_local/Local_05.jpg"
				},
				{
					path: "img/projects/the_local/Local_06.jpg"
				},
				{
					path: "img/projects/the_local/Local_07.jpg"
				}
			]
		},
		{
			alias: "reconstruction",
			name: "RE:Construction",
			location: "HYPOTHETICAL SITE",
			description: "<p>The proposal for this public art program sponsored by The Downtown Alliance in New York City utilizes common safety-related construction objects and repurposes them as devices of decoration for a typical barricade. Elements that normally speak of caution become a study of texture and color, and transform urban blight into an art installation. The cones are sheared off at various points to allow for view portals while passing through the barricade.</p>",
			thumbnail: "img/projects/re_construction/ReCon_Thumbnail.jpg",
			categories: ["speculative"],
			assets: [
				{
					path: "img/projects/re_construction/ReCon_01.jpg"
				},
				{
					path: "img/projects/re_construction/ReCon_02.jpg"
				},
				{
					path: "img/projects/re_construction/ReCon_03.jpg"
				},
				{
					path: "img/projects/re_construction/ReCon_04.jpg"
				},
				{
					path: "img/projects/re_construction/ReCon_05.jpg"
				},
				{
					path: "img/projects/re_construction/ReCon_06.jpg"
				},
				{
					path: "img/projects/re_construction/ReCon_07.jpg"
				}
			]
		},
		{
			alias: "theLab",
			name: "The Lab",
			location: "Pasadena, CA",
			description: "<p>The location for this new restaurant is in a historic old building that once housed Albert Einstein’s lab in old town Pasadena. The concept for the design blends references to old science labs (the owners are both scientists) with the location’s industrial character. The project is in the construction document phase, more images coming soon.</p>",
			thumbnail: "img/projects/the_lab/LAB_thumbnail.jpg",
			categories: ["commercial"],
			assets: [
				{
					path: "img/projects/the_lab/LAB_1.jpg"
				},
				{
					path: "img/projects/the_lab/LAB_2.jpg"
				},
				{
					path: "img/projects/the_lab/LAB_3.jpg"
				},
				{
					path: "img/projects/the_lab/LAB_4.jpg"
				}
			]
		},
		{
			alias: "1735Studio",
			name: "1735 Studio",
			location: "SANTA MONICA, CA",
			description: "<p>Our studio is a home away from home for us and our staff. Housed in an old button factory turned artist’s studio turned creative office, the space features operable 11’ steel windows and even higher bowstring truss ceilings. To complement the industrial character of the space we made desks and cabinets out of plywood, adding a laser cut custom perforation pattern to some feature pieces. Brightly painted standard steel shelving provides additional storage, and colorful rugs and textiles on the pinup walls soften the space. Our own collection of vintage furniture coexists with more contemporary pieces and with the rotating finds, loaners and mockups for our projects.</p>",
			thumbnail: "img/projects/1735_studio/1735_thumbnail.jpg",
			categories: ["interiors"],
			assets: [
				{
					path: "img/projects/1735_studio/1735_01.jpg"
				},
				{
					path: "img/projects/1735_studio/1735_02.jpg"
				},
				{
					path: "img/projects/1735_studio/1735_03.jpg"
				},
				{
					path: "img/projects/1735_studio/1735_05.jpg"
				},
				{
					path: "img/projects/1735_studio/1735_06.jpg"
				},
				{
					path: "img/projects/1735_studio/1735_07.jpg"
				},
				{
					path: "img/projects/1735_studio/1735_08.jpg"
				}
			]
		},
		{
			alias: "globalPrepAcademy",
			name: "Global Prep Academy",
			location: "Valencia, CA",
			description: "<p>GPA was built with the mission that 21st century students must be successful academically and globally; they should be prepared to show colleges that beyond earning high test scores and grades, they are intellectually curious and active global citizens. Its founder, David Najar, imagined a welcoming and communal space that engages students with passion, humor and intelligence, and hired Fleetwood Fernandez to bring his vision to life. The space departs from the classic tutoring classroom box, with different learning environments for different subjects. Plywood bleacher style seating covered in Astroturf accommodates lectures and communal break time; a quite library with an array of books and music exposes students to subjects and narratives beyond that of SAT prep work; a small study room allows for club meetings and becomes gaming central during breaks; and two classrooms with flexible furniture are used for more traditional classroom setups. The architecture is intentionally dynamic and expressive, underlined by a bold color palette. Materials used, like concrete, tectum ceilings, and plywood, are industrial and durable, and the furniture adds more color and whimsy.</p>",
			thumbnail: "img/projects/global_prep_academy/GPA_thumbnail.jpg",
			categories: ["commercial"],
			assets: [
				{
					path: "img/projects/global_prep_academy/GPA_1.jpg"
				},
				{
					path: "img/projects/global_prep_academy/GPA_2.jpg"
				},
				{
					path: "img/projects/global_prep_academy/GPA_3.jpg"
				},
				{
					path: "img/projects/global_prep_academy/GPA_4.jpg"
				},
				{
					path: "img/projects/global_prep_academy/GPA_5.jpg"
				},
				{
					path: "img/projects/global_prep_academy/GPA_6.jpg"
				},
				{
					path: "img/projects/global_prep_academy/GPA_7.jpg"
				},
				{
					path: "img/projects/global_prep_academy/GPA_8.jpg"
				},
				{
					path: "img/projects/global_prep_academy/GPA_9.jpg"
				}
			]
		},
		{
			alias: "Peninsula",
			name: "Peninsula Pacific",
			location: "LOS ANGELES, CA",
			description: "<p>The design of this executive office suite blends the bright spirit of the Southern California coast, where the CEO of the company resides, and the robust character of a Sun Valley horse ranch, his second home. Combined, the space also represents the entertainment holding company’s philosophy of relaxed hospitality. White lacquered walls balance the dark reclaimed oak plank flooring. Deep indigo lacquer panels wrap into the boardroom, and clear glass partitions allow uninterrupted views of Century City’s skyline. Fleetwood/Fernandez custom designed most of the furnishings using a palette of noble materials: solid walnut, oiled bronze, and marble.</p>",
			thumbnail: "img/projects/peninsula/Peninsula_thumb.jpg",
			categories: ["interiors"],
			assets: [
				{
 					path: "img/projects/peninsula/Peninsula_01.jpg"
				},
				{
					path: "img/projects/peninsula/Peninsula_02.jpg"
				},
				{
					path: "img/projects/peninsula/Peninsula_04.jpg"
				},
				{
					path: "img/projects/peninsula/Peninsula_05.jpg"
				},
				{
					path: "img/projects/peninsula/Peninsula_06.jpg"
				},
				{
					path: "img/projects/peninsula/Peninsula_07.jpg"
				},
				{
					path: "img/projects/peninsula/Peninsula_08.jpg"
				},
				{
					path: "img/projects/peninsula/Peninsula_03.jpg"
				},
				{
					path: "img/projects/peninsula/Peninsula_09.jpg"
				},
				{
					path: "img/projects/peninsula/Peninsula_10.jpg"
				}
			]
		}
	];
	service.getProjectByID = function(alias) {
		var proj = $.grep(service.projects, function(p, i) {
			return p.alias === alias;
		});
		return proj.length > 0 ? proj[0] : null;
	};

 	return service;
});
