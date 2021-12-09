# cs3200-final-project

**Project name** - Singer Database  

**Team name** - Final Project 12  

**Team members** - Gwendolyn Friedman and Gal Nissan, Section 04  

**Project description** - Nowadays, singers have many songs and albums that they have written, oftentimes in various genres. It can be hard for singers to keep track of all of the songs they have written, as well as what album each of their songs is on, and how many plays each of their songs has. Furthermore, they need to know when each of their albums was released and what genre each album was. This is a lot of information to keep track of, especially for artists with hundreds of songs and over a dozen albums. Our database solves this issue by providing singers a list of all of their music, including number of plays per song.  

**UML diagram** - [db_design_final_project_UML.pdf](https://github.com/gwenfriedman/cs3200-final-project/files/7687398/db_design_final_project_UML.pdf)  

**User** - A typical user on our platform would be a singer/songwriter who would like to keep track of all of the music they have released, and how well their music is doing on streaming services such as Spotify. A singer has a first name, last name, username, password, email, a date of birth, and a list of albums.  

**Domain objects** - Our two domain objects are songs and albums. Songs have a title and a number of plays. Albums have a title, a release date, a genre, and a list of songs.  

**User to domain relationship** - In our data model, there is a one to many relationship between singers and albums. A singer can have many albums, but an album is only sung by one singer.  

**Domain to domain relationship** - In our data model, there is a one to many relationship between albums and songs. An album can have many songs, but a song is only listed on one album.  

**Enumeration** - Our enumeration is genre. An album can be one of the following genres: country, rock, pop, indie, classical, rap.  

**User interface** - Our user interface includes a home screen, a singer list screen, a singer editor screen, an album list screen, an album editor screen, a song list screen, and a song editor screen. The home screen allows you to go to the singer list, album list, and song list screens. The singer list screen displays a list of all the singers and allows you to create a new singer. The singer editor screen displays a particular singer for editing and allows you to navigate to albums for that singer. The album list screen displays a list of all the albums and allows you to create a new album. The album editor screen displays a particular album for editing and allows you to navigate to the singer of that album and songs on that album. The song list screen displays a list of all the songs and allows you to create a new song. The song editor screen displays a particular song for editing and allows you to navigate to the album that song is on.
