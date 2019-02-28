import React from 'react';
import {Route } from 'react-router-dom';

//demo pages
import Demo from './pages/p-demo';
import DemoVault from './pages/p-demo-vault';
import DemoDistro from './pages/p-demo-distro';
import DemoRbac from './pages/p-demo-rbac';

//Auth pages
import Home from './mock/home'; 
import AuthRegister from './mock/register';

//Messaging pages
//Messaging is found in the home page where chat is a popup
// *** th e'p' prefix is temporary to distinguish page names from components names. ***//
//Get started pages -NO ROUTING FOR THESE PAGES)
import GetStarted from './pages/p-get-started';  
import GetStartedArtistCreate from './pages/p-get-started-artist-create';
import GetStartedFileUpload from './pages/p-get-started-file-upload';
// Vault pages
import VaultLockers from './pages/p-vault-lockers';
import VaultLocker from './pages/p-vault-locker';
import VaultArtists from './pages/p-vault-artists';
import VaultFileUpload from './pages/p-vault-file-upload';
import VaultLockerSearch from './pages/p-vault-locker-search';
import VaultLockerAddCollaborator from './pages/p-vault-locker-add-collaborator';
// Profile pages
import Profile from './pages/p-profile';
import ProfileImage from './pages/p-profile-image';
import ProfileChangeName from './pages/p-profile-change-name';
import ProfileChangeLocation from './pages/p-profile-change-location';
import ProfileChangePassword from './pages/p-profile-change-password';
import ProfileSocials from './pages/p-profile-socials';
import ProfileMusicStore from './pages/p-profile-music-store';
//Metadata pages
import MetadataArtistInfo from './pages/p-metadata-artist-info';
import MetadataTrackInfo from './pages/p-metadata-track-info';
import MetadataLanguage from './pages/p-metadata-language';
import MetadataGenres from './pages/p-metadata-genres';
import MetadataFeaturedArtists from './pages/p-metadata-featured-artists';
      //ALSO META?? this is used 2 places below   !
import MetadataCollaborators from './pages/p-metadata-collaborators'; 
import MetadataLyrics from './pages/p-metadata-lyrics';
//Distribution pages
import DistributionNewRelease from './pages/p-distribution-new-release';
import DistributionAlbumArt from './pages/p-distribution-album-art';
import DistributionSelectTracks from './pages/p-distribution-select-tracks';
import DistributionOrderTracks from './pages/p-distribution-order-tracks';
import DistributionMusicStores from './pages/p-distribution-music-store';
import DistributionCountries from './pages/p-distribution-countries';
import DistributionLanguage from './pages/p-distribution-language';
import DistributionReleaseDate from './pages/p-distribution-release-date';
import DistributionSuccess from './pages/p-distribution-success';
import DistributionSummary from './pages/p-distribution-summary';
//Song Review pages
import SongReviews from './pages/p-song-reviews';


export default () => <React.Fragment>

  {/* Demo pages ?? */}
  <Route exact path="/demo" component={Demo} />
  <Route exact path="/demo-vault" component={DemoVault} />
  <Route exact path="/demo-distro" component={DemoDistro} />
  <Route exact path="/demo-rbac" component={DemoRbac} />
  
  {/* Auth pages */}
  <Route exact path="/mock/home" component={Home} />
  <Route exact path="/mock/register" component={AuthRegister} />

  {/* Get started pages -NO ROUTING FOR THESE PAGES) */}
  
  {/* Vault pages- Argel , I'd like to change the 'artist' directory to 'vault' -Joe */}
  <Route exact path="/artists/lockers" component={VaultLockers} />
  <Route exact path="/artists/lockers/locker" component={VaultLocker} />
  <Route exact path="/artists" component={VaultArtists} />
  <Route exact path="/artists/lockers/locker/add-collaborators/:id" component={VaultLockerAddCollaborator} />
  <Route exact path="/artists/lockers/locker/file-upload" component={VaultFileUpload} />
  {/* Why a short path name? */}
  <Route exact path="/file-upload" component={VaultFileUpload} />
  {/* Search pages -- WHY TWO?  */}
  <Route exact path="/locker-search" component={VaultLockerSearch} />
  <Route exact path="/locker-search/locker" component={VaultLocker} />   
  <Route exact path="/profile" component={Profile} />
  <Route exact path="/profile/profile-image" component={ProfileImage} />
  <Route exact path="/profile/change-name" component={ProfileChangeName} />
  <Route exact path="/profile/change-location" component={ProfileChangeLocation} />
  <Route exact path="/profile/change-password" component={ProfileChangePassword} />
  <Route exact path="/profile/socials" component={ProfileSocials} />
  <Route exact path="/profile/music-store" component={ProfileMusicStore} />
  <Route exact path="/metadata-artist-info" component={MetadataArtistInfo} />
  <Route exact path="/metadata-track-info" component={MetadataTrackInfo} />
  <Route exact path="/metadata-language" component={MetadataLanguage} />
  <Route exact path="/metadata-genres" component={MetadataGenres} />
  <Route exact path="/metadata-featured-artists" component={MetadataFeaturedArtists} />
  <Route exact path="/metadata-add-collaborators" component={MetadataCollaborators} />
  <Route exact path="/metadata-lyrics" component={MetadataLyrics} />
  <Route exact path="/distribution-new-release" component={DistributionNewRelease} />
  <Route exact path="/distribution-album-art" component={DistributionAlbumArt} />
  <Route exact path="/distribution-select-tracks" component={DistributionSelectTracks} />
  <Route exact path="/distribution-order-tracks" component={DistributionOrderTracks} />
  <Route exact path="/distribution-music-stores" component={DistributionMusicStores} />
  <Route exact path="/distribution-countries" component={DistributionCountries} />
  <Route exact path="/distribution-language" component={DistributionLanguage} />
  <Route exact path="/distribution-release-date" component={DistributionReleaseDate} />
  <Route exact path="/distribution-summary" component={DistributionSummary} />
  <Route exact path="/distribution-success" component={DistributionSuccess} />
  <Route exact path="/song-review" component={SongReviews} />

</React.Fragment>