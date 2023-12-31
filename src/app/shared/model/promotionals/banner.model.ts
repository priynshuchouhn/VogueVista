export class Banner {
    bannerId: string;
    bannerImage: string;
    bannerTypeId: number

    constructor(bannerId: string, bannerImage: string,bannerTypeId: number) {
        this.bannerId = bannerId;
        this.bannerImage = bannerImage
        this.bannerTypeId = bannerTypeId
    }
}

export class homePageBanner extends Banner {
    bannerSmallText: string;
    bannerHeading: string;
    bannerSubheading: string

    constructor(bannerId: string, bannerImage: string, bannerTypeId:number , bannerSmallText: string, bannerHeading: string, bannerSubheading: string) {
        super(bannerId, bannerImage, bannerTypeId);
        this.bannerSmallText = bannerSmallText
        this.bannerHeading = bannerHeading
        this.bannerSubheading = bannerSubheading
    }
}