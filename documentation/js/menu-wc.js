'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ba documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-92a09f5043851a57b7bbb094ebb6dcc700233df4b2dec4ed90d260aebec8ea6bf9d1c370d98d91497cfeb647ac5fb9bfd31d4d9d10c5d314aeaee92cc0a0118f"' : 'data-bs-target="#xs-controllers-links-module-AppModule-92a09f5043851a57b7bbb094ebb6dcc700233df4b2dec4ed90d260aebec8ea6bf9d1c370d98d91497cfeb647ac5fb9bfd31d4d9d10c5d314aeaee92cc0a0118f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-92a09f5043851a57b7bbb094ebb6dcc700233df4b2dec4ed90d260aebec8ea6bf9d1c370d98d91497cfeb647ac5fb9bfd31d4d9d10c5d314aeaee92cc0a0118f"' :
                                            'id="xs-controllers-links-module-AppModule-92a09f5043851a57b7bbb094ebb6dcc700233df4b2dec4ed90d260aebec8ea6bf9d1c370d98d91497cfeb647ac5fb9bfd31d4d9d10c5d314aeaee92cc0a0118f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-92a09f5043851a57b7bbb094ebb6dcc700233df4b2dec4ed90d260aebec8ea6bf9d1c370d98d91497cfeb647ac5fb9bfd31d4d9d10c5d314aeaee92cc0a0118f"' : 'data-bs-target="#xs-injectables-links-module-AppModule-92a09f5043851a57b7bbb094ebb6dcc700233df4b2dec4ed90d260aebec8ea6bf9d1c370d98d91497cfeb647ac5fb9bfd31d4d9d10c5d314aeaee92cc0a0118f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-92a09f5043851a57b7bbb094ebb6dcc700233df4b2dec4ed90d260aebec8ea6bf9d1c370d98d91497cfeb647ac5fb9bfd31d4d9d10c5d314aeaee92cc0a0118f"' :
                                        'id="xs-injectables-links-module-AppModule-92a09f5043851a57b7bbb094ebb6dcc700233df4b2dec4ed90d260aebec8ea6bf9d1c370d98d91497cfeb647ac5fb9bfd31d4d9d10c5d314aeaee92cc0a0118f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-3525f46e2d6a573fce0a26d0f2b8ef0aa73e65c5e5e5ea3f54fab681f51188890aea23384756904b917918ade40d27037dd0c91387f051c454aebb94e0d97b29"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-3525f46e2d6a573fce0a26d0f2b8ef0aa73e65c5e5e5ea3f54fab681f51188890aea23384756904b917918ade40d27037dd0c91387f051c454aebb94e0d97b29"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-3525f46e2d6a573fce0a26d0f2b8ef0aa73e65c5e5e5ea3f54fab681f51188890aea23384756904b917918ade40d27037dd0c91387f051c454aebb94e0d97b29"' :
                                        'id="xs-injectables-links-module-AuthModule-3525f46e2d6a573fce0a26d0f2b8ef0aa73e65c5e5e5ea3f54fab681f51188890aea23384756904b917918ade40d27037dd0c91387f051c454aebb94e0d97b29"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriesModule.html" data-type="entity-link" >CategoriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoriesModule-1e5249dd981beb507594ded16ab4bc7e45df3ea1bf36bc81a351d709190583d9ae5f4823248b0a698c9a757acd63203677db13d3ef27e2eaa4b298ab573f4996"' : 'data-bs-target="#xs-controllers-links-module-CategoriesModule-1e5249dd981beb507594ded16ab4bc7e45df3ea1bf36bc81a351d709190583d9ae5f4823248b0a698c9a757acd63203677db13d3ef27e2eaa4b298ab573f4996"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoriesModule-1e5249dd981beb507594ded16ab4bc7e45df3ea1bf36bc81a351d709190583d9ae5f4823248b0a698c9a757acd63203677db13d3ef27e2eaa4b298ab573f4996"' :
                                            'id="xs-controllers-links-module-CategoriesModule-1e5249dd981beb507594ded16ab4bc7e45df3ea1bf36bc81a351d709190583d9ae5f4823248b0a698c9a757acd63203677db13d3ef27e2eaa4b298ab573f4996"' }>
                                            <li class="link">
                                                <a href="controllers/CategoriesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoriesModule-1e5249dd981beb507594ded16ab4bc7e45df3ea1bf36bc81a351d709190583d9ae5f4823248b0a698c9a757acd63203677db13d3ef27e2eaa4b298ab573f4996"' : 'data-bs-target="#xs-injectables-links-module-CategoriesModule-1e5249dd981beb507594ded16ab4bc7e45df3ea1bf36bc81a351d709190583d9ae5f4823248b0a698c9a757acd63203677db13d3ef27e2eaa4b298ab573f4996"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoriesModule-1e5249dd981beb507594ded16ab4bc7e45df3ea1bf36bc81a351d709190583d9ae5f4823248b0a698c9a757acd63203677db13d3ef27e2eaa4b298ab573f4996"' :
                                        'id="xs-injectables-links-module-CategoriesModule-1e5249dd981beb507594ded16ab4bc7e45df3ea1bf36bc81a351d709190583d9ae5f4823248b0a698c9a757acd63203677db13d3ef27e2eaa4b298ab573f4996"' }>
                                        <li class="link">
                                            <a href="injectables/CategoriesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompaniesModule.html" data-type="entity-link" >CompaniesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CompaniesModule-9f905e0a1e36418be70fdb3a5d83f9d6071db9fe82d1cebeb3b1f8bebf26de978a0c677cb2d4ab67142b619860baaff7041f1637a1e08b731ac0044ffd9d196e"' : 'data-bs-target="#xs-controllers-links-module-CompaniesModule-9f905e0a1e36418be70fdb3a5d83f9d6071db9fe82d1cebeb3b1f8bebf26de978a0c677cb2d4ab67142b619860baaff7041f1637a1e08b731ac0044ffd9d196e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CompaniesModule-9f905e0a1e36418be70fdb3a5d83f9d6071db9fe82d1cebeb3b1f8bebf26de978a0c677cb2d4ab67142b619860baaff7041f1637a1e08b731ac0044ffd9d196e"' :
                                            'id="xs-controllers-links-module-CompaniesModule-9f905e0a1e36418be70fdb3a5d83f9d6071db9fe82d1cebeb3b1f8bebf26de978a0c677cb2d4ab67142b619860baaff7041f1637a1e08b731ac0044ffd9d196e"' }>
                                            <li class="link">
                                                <a href="controllers/CompaniesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CompaniesModule-9f905e0a1e36418be70fdb3a5d83f9d6071db9fe82d1cebeb3b1f8bebf26de978a0c677cb2d4ab67142b619860baaff7041f1637a1e08b731ac0044ffd9d196e"' : 'data-bs-target="#xs-injectables-links-module-CompaniesModule-9f905e0a1e36418be70fdb3a5d83f9d6071db9fe82d1cebeb3b1f8bebf26de978a0c677cb2d4ab67142b619860baaff7041f1637a1e08b731ac0044ffd9d196e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CompaniesModule-9f905e0a1e36418be70fdb3a5d83f9d6071db9fe82d1cebeb3b1f8bebf26de978a0c677cb2d4ab67142b619860baaff7041f1637a1e08b731ac0044ffd9d196e"' :
                                        'id="xs-injectables-links-module-CompaniesModule-9f905e0a1e36418be70fdb3a5d83f9d6071db9fe82d1cebeb3b1f8bebf26de978a0c677cb2d4ab67142b619860baaff7041f1637a1e08b731ac0044ffd9d196e"' }>
                                        <li class="link">
                                            <a href="injectables/CompaniesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JobboardContactsModule.html" data-type="entity-link" >JobboardContactsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-JobboardContactsModule-d616088b8f307cd1936b2ed60af2e717a8f31fb1b508252d91b3d66c51437527a6fdeb4bb93f12e65214d461500553d98ab8dc13131330380a73604618fe2a97"' : 'data-bs-target="#xs-controllers-links-module-JobboardContactsModule-d616088b8f307cd1936b2ed60af2e717a8f31fb1b508252d91b3d66c51437527a6fdeb4bb93f12e65214d461500553d98ab8dc13131330380a73604618fe2a97"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-JobboardContactsModule-d616088b8f307cd1936b2ed60af2e717a8f31fb1b508252d91b3d66c51437527a6fdeb4bb93f12e65214d461500553d98ab8dc13131330380a73604618fe2a97"' :
                                            'id="xs-controllers-links-module-JobboardContactsModule-d616088b8f307cd1936b2ed60af2e717a8f31fb1b508252d91b3d66c51437527a6fdeb4bb93f12e65214d461500553d98ab8dc13131330380a73604618fe2a97"' }>
                                            <li class="link">
                                                <a href="controllers/JobboardContactsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobboardContactsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-JobboardContactsModule-d616088b8f307cd1936b2ed60af2e717a8f31fb1b508252d91b3d66c51437527a6fdeb4bb93f12e65214d461500553d98ab8dc13131330380a73604618fe2a97"' : 'data-bs-target="#xs-injectables-links-module-JobboardContactsModule-d616088b8f307cd1936b2ed60af2e717a8f31fb1b508252d91b3d66c51437527a6fdeb4bb93f12e65214d461500553d98ab8dc13131330380a73604618fe2a97"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JobboardContactsModule-d616088b8f307cd1936b2ed60af2e717a8f31fb1b508252d91b3d66c51437527a6fdeb4bb93f12e65214d461500553d98ab8dc13131330380a73604618fe2a97"' :
                                        'id="xs-injectables-links-module-JobboardContactsModule-d616088b8f307cd1936b2ed60af2e717a8f31fb1b508252d91b3d66c51437527a6fdeb4bb93f12e65214d461500553d98ab8dc13131330380a73604618fe2a97"' }>
                                        <li class="link">
                                            <a href="injectables/JobboardContactsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobboardContactsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JobboardModule.html" data-type="entity-link" >JobboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-JobboardModule-43ed537119cd6f2f61d3ee826a6877147a94f95c331af9f34a177864688f8ff24e38eb12128abaf5fdba1ef6f469a130ea59c4bb18abd62179d551831be8c3b5"' : 'data-bs-target="#xs-controllers-links-module-JobboardModule-43ed537119cd6f2f61d3ee826a6877147a94f95c331af9f34a177864688f8ff24e38eb12128abaf5fdba1ef6f469a130ea59c4bb18abd62179d551831be8c3b5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-JobboardModule-43ed537119cd6f2f61d3ee826a6877147a94f95c331af9f34a177864688f8ff24e38eb12128abaf5fdba1ef6f469a130ea59c4bb18abd62179d551831be8c3b5"' :
                                            'id="xs-controllers-links-module-JobboardModule-43ed537119cd6f2f61d3ee826a6877147a94f95c331af9f34a177864688f8ff24e38eb12128abaf5fdba1ef6f469a130ea59c4bb18abd62179d551831be8c3b5"' }>
                                            <li class="link">
                                                <a href="controllers/JobboardController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobboardController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-JobboardModule-43ed537119cd6f2f61d3ee826a6877147a94f95c331af9f34a177864688f8ff24e38eb12128abaf5fdba1ef6f469a130ea59c4bb18abd62179d551831be8c3b5"' : 'data-bs-target="#xs-injectables-links-module-JobboardModule-43ed537119cd6f2f61d3ee826a6877147a94f95c331af9f34a177864688f8ff24e38eb12128abaf5fdba1ef6f469a130ea59c4bb18abd62179d551831be8c3b5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JobboardModule-43ed537119cd6f2f61d3ee826a6877147a94f95c331af9f34a177864688f8ff24e38eb12128abaf5fdba1ef6f469a130ea59c4bb18abd62179d551831be8c3b5"' :
                                        'id="xs-injectables-links-module-JobboardModule-43ed537119cd6f2f61d3ee826a6877147a94f95c331af9f34a177864688f8ff24e38eb12128abaf5fdba1ef6f469a130ea59c4bb18abd62179d551831be8c3b5"' }>
                                        <li class="link">
                                            <a href="injectables/JobboardService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobboardService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationsModule.html" data-type="entity-link" >NotificationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-NotificationsModule-00e2c10c132557e77daf82e813f391a30a6243c3dc4baed31ee5af9f60fed9755ccd61aed02209ae12c693868de1ae01df7a04cada8e1b34ab1d47f0ef17240d"' : 'data-bs-target="#xs-controllers-links-module-NotificationsModule-00e2c10c132557e77daf82e813f391a30a6243c3dc4baed31ee5af9f60fed9755ccd61aed02209ae12c693868de1ae01df7a04cada8e1b34ab1d47f0ef17240d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NotificationsModule-00e2c10c132557e77daf82e813f391a30a6243c3dc4baed31ee5af9f60fed9755ccd61aed02209ae12c693868de1ae01df7a04cada8e1b34ab1d47f0ef17240d"' :
                                            'id="xs-controllers-links-module-NotificationsModule-00e2c10c132557e77daf82e813f391a30a6243c3dc4baed31ee5af9f60fed9755ccd61aed02209ae12c693868de1ae01df7a04cada8e1b34ab1d47f0ef17240d"' }>
                                            <li class="link">
                                                <a href="controllers/NotificationsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-NotificationsModule-00e2c10c132557e77daf82e813f391a30a6243c3dc4baed31ee5af9f60fed9755ccd61aed02209ae12c693868de1ae01df7a04cada8e1b34ab1d47f0ef17240d"' : 'data-bs-target="#xs-injectables-links-module-NotificationsModule-00e2c10c132557e77daf82e813f391a30a6243c3dc4baed31ee5af9f60fed9755ccd61aed02209ae12c693868de1ae01df7a04cada8e1b34ab1d47f0ef17240d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NotificationsModule-00e2c10c132557e77daf82e813f391a30a6243c3dc4baed31ee5af9f60fed9755ccd61aed02209ae12c693868de1ae01df7a04cada8e1b34ab1d47f0ef17240d"' :
                                        'id="xs-injectables-links-module-NotificationsModule-00e2c10c132557e77daf82e813f391a30a6243c3dc4baed31ee5af9f60fed9755ccd61aed02209ae12c693868de1ae01df7a04cada8e1b34ab1d47f0ef17240d"' }>
                                        <li class="link">
                                            <a href="injectables/NotificationsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OptionsModule.html" data-type="entity-link" >OptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-OptionsModule-203ad6ea43d8eb59138b1cde8aac8db2987947ee40954a9d32080dfbd74fe1d597650dedec0ca3215e2c76a6be04966c41595e6865c105053960eed62344c06e"' : 'data-bs-target="#xs-controllers-links-module-OptionsModule-203ad6ea43d8eb59138b1cde8aac8db2987947ee40954a9d32080dfbd74fe1d597650dedec0ca3215e2c76a6be04966c41595e6865c105053960eed62344c06e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OptionsModule-203ad6ea43d8eb59138b1cde8aac8db2987947ee40954a9d32080dfbd74fe1d597650dedec0ca3215e2c76a6be04966c41595e6865c105053960eed62344c06e"' :
                                            'id="xs-controllers-links-module-OptionsModule-203ad6ea43d8eb59138b1cde8aac8db2987947ee40954a9d32080dfbd74fe1d597650dedec0ca3215e2c76a6be04966c41595e6865c105053960eed62344c06e"' }>
                                            <li class="link">
                                                <a href="controllers/OptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OptionsModule-203ad6ea43d8eb59138b1cde8aac8db2987947ee40954a9d32080dfbd74fe1d597650dedec0ca3215e2c76a6be04966c41595e6865c105053960eed62344c06e"' : 'data-bs-target="#xs-injectables-links-module-OptionsModule-203ad6ea43d8eb59138b1cde8aac8db2987947ee40954a9d32080dfbd74fe1d597650dedec0ca3215e2c76a6be04966c41595e6865c105053960eed62344c06e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OptionsModule-203ad6ea43d8eb59138b1cde8aac8db2987947ee40954a9d32080dfbd74fe1d597650dedec0ca3215e2c76a6be04966c41595e6865c105053960eed62344c06e"' :
                                        'id="xs-injectables-links-module-OptionsModule-203ad6ea43d8eb59138b1cde8aac8db2987947ee40954a9d32080dfbd74fe1d597650dedec0ca3215e2c76a6be04966c41595e6865c105053960eed62344c06e"' }>
                                        <li class="link">
                                            <a href="injectables/OptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ParticularsModule.html" data-type="entity-link" >ParticularsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ParticularsModule-e5cee4b2746027a73db114a8407bbf755dda0270d1d520734827110355b3ea06a88b1fad5be3950f86ca2a12e47c3bbd42608982acc84151671503c7205427ac"' : 'data-bs-target="#xs-controllers-links-module-ParticularsModule-e5cee4b2746027a73db114a8407bbf755dda0270d1d520734827110355b3ea06a88b1fad5be3950f86ca2a12e47c3bbd42608982acc84151671503c7205427ac"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ParticularsModule-e5cee4b2746027a73db114a8407bbf755dda0270d1d520734827110355b3ea06a88b1fad5be3950f86ca2a12e47c3bbd42608982acc84151671503c7205427ac"' :
                                            'id="xs-controllers-links-module-ParticularsModule-e5cee4b2746027a73db114a8407bbf755dda0270d1d520734827110355b3ea06a88b1fad5be3950f86ca2a12e47c3bbd42608982acc84151671503c7205427ac"' }>
                                            <li class="link">
                                                <a href="controllers/ParticularsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ParticularsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ParticularsModule-e5cee4b2746027a73db114a8407bbf755dda0270d1d520734827110355b3ea06a88b1fad5be3950f86ca2a12e47c3bbd42608982acc84151671503c7205427ac"' : 'data-bs-target="#xs-injectables-links-module-ParticularsModule-e5cee4b2746027a73db114a8407bbf755dda0270d1d520734827110355b3ea06a88b1fad5be3950f86ca2a12e47c3bbd42608982acc84151671503c7205427ac"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ParticularsModule-e5cee4b2746027a73db114a8407bbf755dda0270d1d520734827110355b3ea06a88b1fad5be3950f86ca2a12e47c3bbd42608982acc84151671503c7205427ac"' :
                                        'id="xs-injectables-links-module-ParticularsModule-e5cee4b2746027a73db114a8407bbf755dda0270d1d520734827110355b3ea06a88b1fad5be3950f86ca2a12e47c3bbd42608982acc84151671503c7205427ac"' }>
                                        <li class="link">
                                            <a href="injectables/ParticularsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ParticularsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentsModule.html" data-type="entity-link" >PaymentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PaymentsModule-a86b3ae6fe103da2224adc5700947900b563a02caa4409a4dfc7708539032e2c17ced7d3bfd9133ec8a85201ba6c1fad0d77eec7f05ec4036317f48668794029"' : 'data-bs-target="#xs-controllers-links-module-PaymentsModule-a86b3ae6fe103da2224adc5700947900b563a02caa4409a4dfc7708539032e2c17ced7d3bfd9133ec8a85201ba6c1fad0d77eec7f05ec4036317f48668794029"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PaymentsModule-a86b3ae6fe103da2224adc5700947900b563a02caa4409a4dfc7708539032e2c17ced7d3bfd9133ec8a85201ba6c1fad0d77eec7f05ec4036317f48668794029"' :
                                            'id="xs-controllers-links-module-PaymentsModule-a86b3ae6fe103da2224adc5700947900b563a02caa4409a4dfc7708539032e2c17ced7d3bfd9133ec8a85201ba6c1fad0d77eec7f05ec4036317f48668794029"' }>
                                            <li class="link">
                                                <a href="controllers/PaymentsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PaymentsModule-a86b3ae6fe103da2224adc5700947900b563a02caa4409a4dfc7708539032e2c17ced7d3bfd9133ec8a85201ba6c1fad0d77eec7f05ec4036317f48668794029"' : 'data-bs-target="#xs-injectables-links-module-PaymentsModule-a86b3ae6fe103da2224adc5700947900b563a02caa4409a4dfc7708539032e2c17ced7d3bfd9133ec8a85201ba6c1fad0d77eec7f05ec4036317f48668794029"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaymentsModule-a86b3ae6fe103da2224adc5700947900b563a02caa4409a4dfc7708539032e2c17ced7d3bfd9133ec8a85201ba6c1fad0d77eec7f05ec4036317f48668794029"' :
                                        'id="xs-injectables-links-module-PaymentsModule-a86b3ae6fe103da2224adc5700947900b563a02caa4409a4dfc7708539032e2c17ced7d3bfd9133ec8a85201ba6c1fad0d77eec7f05ec4036317f48668794029"' }>
                                        <li class="link">
                                            <a href="injectables/PaymentsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/QuotesModule.html" data-type="entity-link" >QuotesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-QuotesModule-8d582d0f5bccaaec593560be4b62a7265005befd05342e5920d96bdb5787b3fc80fe377b2e3f8ff965fd1322af565fe84673875430315ba8f077dfc30c3cca38"' : 'data-bs-target="#xs-controllers-links-module-QuotesModule-8d582d0f5bccaaec593560be4b62a7265005befd05342e5920d96bdb5787b3fc80fe377b2e3f8ff965fd1322af565fe84673875430315ba8f077dfc30c3cca38"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-QuotesModule-8d582d0f5bccaaec593560be4b62a7265005befd05342e5920d96bdb5787b3fc80fe377b2e3f8ff965fd1322af565fe84673875430315ba8f077dfc30c3cca38"' :
                                            'id="xs-controllers-links-module-QuotesModule-8d582d0f5bccaaec593560be4b62a7265005befd05342e5920d96bdb5787b3fc80fe377b2e3f8ff965fd1322af565fe84673875430315ba8f077dfc30c3cca38"' }>
                                            <li class="link">
                                                <a href="controllers/QuotesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuotesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-QuotesModule-8d582d0f5bccaaec593560be4b62a7265005befd05342e5920d96bdb5787b3fc80fe377b2e3f8ff965fd1322af565fe84673875430315ba8f077dfc30c3cca38"' : 'data-bs-target="#xs-injectables-links-module-QuotesModule-8d582d0f5bccaaec593560be4b62a7265005befd05342e5920d96bdb5787b3fc80fe377b2e3f8ff965fd1322af565fe84673875430315ba8f077dfc30c3cca38"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-QuotesModule-8d582d0f5bccaaec593560be4b62a7265005befd05342e5920d96bdb5787b3fc80fe377b2e3f8ff965fd1322af565fe84673875430315ba8f077dfc30c3cca38"' :
                                        'id="xs-injectables-links-module-QuotesModule-8d582d0f5bccaaec593560be4b62a7265005befd05342e5920d96bdb5787b3fc80fe377b2e3f8ff965fd1322af565fe84673875430315ba8f077dfc30c3cca38"' }>
                                        <li class="link">
                                            <a href="injectables/QuotesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuotesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SecteursActiviteModule.html" data-type="entity-link" >SecteursActiviteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SecteursActiviteModule-b8021f985ea898fcaa0574798459697836b46148459f8498a01a4401bfea4253117188d18e0fb160679da9db42bea8486ce111ad99b7ef6e1500b31e81dfe5a9"' : 'data-bs-target="#xs-controllers-links-module-SecteursActiviteModule-b8021f985ea898fcaa0574798459697836b46148459f8498a01a4401bfea4253117188d18e0fb160679da9db42bea8486ce111ad99b7ef6e1500b31e81dfe5a9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SecteursActiviteModule-b8021f985ea898fcaa0574798459697836b46148459f8498a01a4401bfea4253117188d18e0fb160679da9db42bea8486ce111ad99b7ef6e1500b31e81dfe5a9"' :
                                            'id="xs-controllers-links-module-SecteursActiviteModule-b8021f985ea898fcaa0574798459697836b46148459f8498a01a4401bfea4253117188d18e0fb160679da9db42bea8486ce111ad99b7ef6e1500b31e81dfe5a9"' }>
                                            <li class="link">
                                                <a href="controllers/SecteursActiviteController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecteursActiviteController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SecteursActiviteModule-b8021f985ea898fcaa0574798459697836b46148459f8498a01a4401bfea4253117188d18e0fb160679da9db42bea8486ce111ad99b7ef6e1500b31e81dfe5a9"' : 'data-bs-target="#xs-injectables-links-module-SecteursActiviteModule-b8021f985ea898fcaa0574798459697836b46148459f8498a01a4401bfea4253117188d18e0fb160679da9db42bea8486ce111ad99b7ef6e1500b31e81dfe5a9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SecteursActiviteModule-b8021f985ea898fcaa0574798459697836b46148459f8498a01a4401bfea4253117188d18e0fb160679da9db42bea8486ce111ad99b7ef6e1500b31e81dfe5a9"' :
                                        'id="xs-injectables-links-module-SecteursActiviteModule-b8021f985ea898fcaa0574798459697836b46148459f8498a01a4401bfea4253117188d18e0fb160679da9db42bea8486ce111ad99b7ef6e1500b31e81dfe5a9"' }>
                                        <li class="link">
                                            <a href="injectables/SecteursActiviteService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecteursActiviteService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubscriptionOptionsModule.html" data-type="entity-link" >SubscriptionOptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SubscriptionOptionsModule-ac3ff92f0feed4ca007ebd436234ff5d347b3e6e88f8086c500cc30838ee08cfbb5129fef2dfb01cd440c7ae4a2cb9b741857860d640300db60f42dcd4b1d052"' : 'data-bs-target="#xs-controllers-links-module-SubscriptionOptionsModule-ac3ff92f0feed4ca007ebd436234ff5d347b3e6e88f8086c500cc30838ee08cfbb5129fef2dfb01cd440c7ae4a2cb9b741857860d640300db60f42dcd4b1d052"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubscriptionOptionsModule-ac3ff92f0feed4ca007ebd436234ff5d347b3e6e88f8086c500cc30838ee08cfbb5129fef2dfb01cd440c7ae4a2cb9b741857860d640300db60f42dcd4b1d052"' :
                                            'id="xs-controllers-links-module-SubscriptionOptionsModule-ac3ff92f0feed4ca007ebd436234ff5d347b3e6e88f8086c500cc30838ee08cfbb5129fef2dfb01cd440c7ae4a2cb9b741857860d640300db60f42dcd4b1d052"' }>
                                            <li class="link">
                                                <a href="controllers/SubscriptionOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscriptionOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SubscriptionOptionsModule-ac3ff92f0feed4ca007ebd436234ff5d347b3e6e88f8086c500cc30838ee08cfbb5129fef2dfb01cd440c7ae4a2cb9b741857860d640300db60f42dcd4b1d052"' : 'data-bs-target="#xs-injectables-links-module-SubscriptionOptionsModule-ac3ff92f0feed4ca007ebd436234ff5d347b3e6e88f8086c500cc30838ee08cfbb5129fef2dfb01cd440c7ae4a2cb9b741857860d640300db60f42dcd4b1d052"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubscriptionOptionsModule-ac3ff92f0feed4ca007ebd436234ff5d347b3e6e88f8086c500cc30838ee08cfbb5129fef2dfb01cd440c7ae4a2cb9b741857860d640300db60f42dcd4b1d052"' :
                                        'id="xs-injectables-links-module-SubscriptionOptionsModule-ac3ff92f0feed4ca007ebd436234ff5d347b3e6e88f8086c500cc30838ee08cfbb5129fef2dfb01cd440c7ae4a2cb9b741857860d640300db60f42dcd4b1d052"' }>
                                        <li class="link">
                                            <a href="injectables/SubscriptionOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscriptionOptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubscriptionsModule.html" data-type="entity-link" >SubscriptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SubscriptionsModule-b9b0cfe937ec320d6d91de697d403634aeeb3f8aa6aa80b1075cc83427048204cd695b78780db33f1d17234cd4d187bb9afd1e068140efa93a5ea942175c9471"' : 'data-bs-target="#xs-controllers-links-module-SubscriptionsModule-b9b0cfe937ec320d6d91de697d403634aeeb3f8aa6aa80b1075cc83427048204cd695b78780db33f1d17234cd4d187bb9afd1e068140efa93a5ea942175c9471"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubscriptionsModule-b9b0cfe937ec320d6d91de697d403634aeeb3f8aa6aa80b1075cc83427048204cd695b78780db33f1d17234cd4d187bb9afd1e068140efa93a5ea942175c9471"' :
                                            'id="xs-controllers-links-module-SubscriptionsModule-b9b0cfe937ec320d6d91de697d403634aeeb3f8aa6aa80b1075cc83427048204cd695b78780db33f1d17234cd4d187bb9afd1e068140efa93a5ea942175c9471"' }>
                                            <li class="link">
                                                <a href="controllers/SubscriptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscriptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SubscriptionsModule-b9b0cfe937ec320d6d91de697d403634aeeb3f8aa6aa80b1075cc83427048204cd695b78780db33f1d17234cd4d187bb9afd1e068140efa93a5ea942175c9471"' : 'data-bs-target="#xs-injectables-links-module-SubscriptionsModule-b9b0cfe937ec320d6d91de697d403634aeeb3f8aa6aa80b1075cc83427048204cd695b78780db33f1d17234cd4d187bb9afd1e068140efa93a5ea942175c9471"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubscriptionsModule-b9b0cfe937ec320d6d91de697d403634aeeb3f8aa6aa80b1075cc83427048204cd695b78780db33f1d17234cd4d187bb9afd1e068140efa93a5ea942175c9471"' :
                                        'id="xs-injectables-links-module-SubscriptionsModule-b9b0cfe937ec320d6d91de697d403634aeeb3f8aa6aa80b1075cc83427048204cd695b78780db33f1d17234cd4d187bb9afd1e068140efa93a5ea942175c9471"' }>
                                        <li class="link">
                                            <a href="injectables/SubscriptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscriptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UniquePurchasesModule.html" data-type="entity-link" >UniquePurchasesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UniquePurchasesModule-1b1b2e3ad1642b5ba1dfe18bc2177dd5f04c87a8859350a48d2db2c3ef847f902d99226780c3ecddc2f8b02d7cf111f9d4d4b143570a009645ec867f3283d96d"' : 'data-bs-target="#xs-controllers-links-module-UniquePurchasesModule-1b1b2e3ad1642b5ba1dfe18bc2177dd5f04c87a8859350a48d2db2c3ef847f902d99226780c3ecddc2f8b02d7cf111f9d4d4b143570a009645ec867f3283d96d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UniquePurchasesModule-1b1b2e3ad1642b5ba1dfe18bc2177dd5f04c87a8859350a48d2db2c3ef847f902d99226780c3ecddc2f8b02d7cf111f9d4d4b143570a009645ec867f3283d96d"' :
                                            'id="xs-controllers-links-module-UniquePurchasesModule-1b1b2e3ad1642b5ba1dfe18bc2177dd5f04c87a8859350a48d2db2c3ef847f902d99226780c3ecddc2f8b02d7cf111f9d4d4b143570a009645ec867f3283d96d"' }>
                                            <li class="link">
                                                <a href="controllers/UniquePurchasesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UniquePurchasesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UniquePurchasesModule-1b1b2e3ad1642b5ba1dfe18bc2177dd5f04c87a8859350a48d2db2c3ef847f902d99226780c3ecddc2f8b02d7cf111f9d4d4b143570a009645ec867f3283d96d"' : 'data-bs-target="#xs-injectables-links-module-UniquePurchasesModule-1b1b2e3ad1642b5ba1dfe18bc2177dd5f04c87a8859350a48d2db2c3ef847f902d99226780c3ecddc2f8b02d7cf111f9d4d4b143570a009645ec867f3283d96d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UniquePurchasesModule-1b1b2e3ad1642b5ba1dfe18bc2177dd5f04c87a8859350a48d2db2c3ef847f902d99226780c3ecddc2f8b02d7cf111f9d4d4b143570a009645ec867f3283d96d"' :
                                        'id="xs-injectables-links-module-UniquePurchasesModule-1b1b2e3ad1642b5ba1dfe18bc2177dd5f04c87a8859350a48d2db2c3ef847f902d99226780c3ecddc2f8b02d7cf111f9d4d4b143570a009645ec867f3283d96d"' }>
                                        <li class="link">
                                            <a href="injectables/UniquePurchasesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UniquePurchasesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-64e78cc996d47c8481f51262fbfa5f935c2cf5449659d3bd8b53ce3ff07e8bdfe62350f46152053ab5843f18cec761f643be3268a7f5247295006b81f58e5ad9"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-64e78cc996d47c8481f51262fbfa5f935c2cf5449659d3bd8b53ce3ff07e8bdfe62350f46152053ab5843f18cec761f643be3268a7f5247295006b81f58e5ad9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-64e78cc996d47c8481f51262fbfa5f935c2cf5449659d3bd8b53ce3ff07e8bdfe62350f46152053ab5843f18cec761f643be3268a7f5247295006b81f58e5ad9"' :
                                            'id="xs-controllers-links-module-UsersModule-64e78cc996d47c8481f51262fbfa5f935c2cf5449659d3bd8b53ce3ff07e8bdfe62350f46152053ab5843f18cec761f643be3268a7f5247295006b81f58e5ad9"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-64e78cc996d47c8481f51262fbfa5f935c2cf5449659d3bd8b53ce3ff07e8bdfe62350f46152053ab5843f18cec761f643be3268a7f5247295006b81f58e5ad9"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-64e78cc996d47c8481f51262fbfa5f935c2cf5449659d3bd8b53ce3ff07e8bdfe62350f46152053ab5843f18cec761f643be3268a7f5247295006b81f58e5ad9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-64e78cc996d47c8481f51262fbfa5f935c2cf5449659d3bd8b53ce3ff07e8bdfe62350f46152053ab5843f18cec761f643be3268a7f5247295006b81f58e5ad9"' :
                                        'id="xs-injectables-links-module-UsersModule-64e78cc996d47c8481f51262fbfa5f935c2cf5449659d3bd8b53ce3ff07e8bdfe62350f46152053ab5843f18cec761f643be3268a7f5247295006b81f58e5ad9"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCompanyDto.html" data-type="entity-link" >CreateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateJobboardContactDto.html" data-type="entity-link" >CreateJobboardContactDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateJobboardDto.html" data-type="entity-link" >CreateJobboardDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateNotificationDto.html" data-type="entity-link" >CreateNotificationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOptionDto.html" data-type="entity-link" >CreateOptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateParticularDto.html" data-type="entity-link" >CreateParticularDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePaymentDto.html" data-type="entity-link" >CreatePaymentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateQuoteDto.html" data-type="entity-link" >CreateQuoteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSecteursActiviteDto.html" data-type="entity-link" >CreateSecteursActiviteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSubscriptionDto.html" data-type="entity-link" >CreateSubscriptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSubscriptionOptionDto.html" data-type="entity-link" >CreateSubscriptionOptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUniquePurchaseDto.html" data-type="entity-link" >CreateUniquePurchaseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Jobboard.html" data-type="entity-link" >Jobboard</a>
                            </li>
                            <li class="link">
                                <a href="classes/JobboardContact.html" data-type="entity-link" >JobboardContact</a>
                            </li>
                            <li class="link">
                                <a href="classes/Notification.html" data-type="entity-link" >Notification</a>
                            </li>
                            <li class="link">
                                <a href="classes/Option.html" data-type="entity-link" >Option</a>
                            </li>
                            <li class="link">
                                <a href="classes/Particular.html" data-type="entity-link" >Particular</a>
                            </li>
                            <li class="link">
                                <a href="classes/Payment.html" data-type="entity-link" >Payment</a>
                            </li>
                            <li class="link">
                                <a href="classes/Quote.html" data-type="entity-link" >Quote</a>
                            </li>
                            <li class="link">
                                <a href="classes/SecteursActivite.html" data-type="entity-link" >SecteursActivite</a>
                            </li>
                            <li class="link">
                                <a href="classes/Subscription.html" data-type="entity-link" >Subscription</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubscriptionOption.html" data-type="entity-link" >SubscriptionOption</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniquePurchase.html" data-type="entity-link" >UniquePurchase</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryDto.html" data-type="entity-link" >UpdateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCompanyDto.html" data-type="entity-link" >UpdateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateJobboardContactDto.html" data-type="entity-link" >UpdateJobboardContactDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateJobboardDto.html" data-type="entity-link" >UpdateJobboardDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateNotificationDto.html" data-type="entity-link" >UpdateNotificationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOptionDto.html" data-type="entity-link" >UpdateOptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateParticularDto.html" data-type="entity-link" >UpdateParticularDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePaymentDto.html" data-type="entity-link" >UpdatePaymentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateQuoteDto.html" data-type="entity-link" >UpdateQuoteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSecteursActiviteDto.html" data-type="entity-link" >UpdateSecteursActiviteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSubscriptionDto.html" data-type="entity-link" >UpdateSubscriptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSubscriptionOptionDto.html" data-type="entity-link" >UpdateSubscriptionOptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUniquePurchaseDto.html" data-type="entity-link" >UpdateUniquePurchaseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});