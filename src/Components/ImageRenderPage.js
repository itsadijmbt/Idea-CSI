import classes from "../UI/ImageRenderPage.module.css";
import { useContext } from "react";
import DataController from "./DataController";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export default function ImageRenderPage(props) {
  const data = props.sender
  //const mainArr = [];
  // const trial = {...data};
  // let i = 0;
  //while (trial[0].images[i] != undefined || trial[0].images[i] != null) {
  //console.log(trial[0].images[i])
  // mainArr.push(trial[0].images[i]);
  //  i++;
  //}
  const ata = {
    total: 1392,
    page: 1,
    results: {
      variaties: [
        {
          description: "pixelate of a lion",
          urls: [
            "https://image.lexica.art/full_jpg/d377c6ec-ea14-47cc-86d8-8348187db349",
            "https://image.lexica.art/full_jpg/3619ee74-7faa-49f6-ae8f-930f9d12f0e3",
            "https://image.lexica.art/full_jpg/503a13f6-68fb-4a71-b6ec-37e62a21630f",
            "https://image.lexica.art/full_jpg/b0d1b0aa-3bb1-4839-be13-bbb004cc3a01",
          ],
        },
        {
          description: "Lion portrait head sculpture",
          urls: [
            "https://image.lexica.art/full_jpg/4bf4d2f3-961f-432a-958a-ed484a1dc436",
            "https://image.lexica.art/full_jpg/2b33bd48-6f28-4b80-af1d-2f1eddbffc16",
            "https://image.lexica.art/full_jpg/74287afa-1694-4261-ab39-19f893a0ce49",
            "https://image.lexica.art/full_jpg/a97a2147-35b1-4c04-a531-e1e91910bdd2",
          ],
        },
        {
          description:
            "a beautfiul award winning aesthetic commission of an antrho lion wearing a black padded hooded puffer jacket,digital art,art by artgerm,character design by charles bowater,ross tran,photorealistic,detailed face,hyperdetailed,western comic,2021,artstation,deviantart",
          urls: [
            "https://image.lexica.art/full_jpg/0eb8bd93-8ccd-4a30-a4b8-0941396b0437",
            "https://image.lexica.art/full_jpg/ceb239a7-e4b0-42e4-ad2b-f95985c66b8f",
            "https://image.lexica.art/full_jpg/904ab008-9c16-4bd2-8a7d-e2e1312e898c",
            "https://image.lexica.art/full_jpg/3e913a46-d209-4e1d-b97b-a5c47b63008a",
          ],
        },
        {
          description: "hercules wearing a skinned lion",
          urls: [
            "https://image.lexica.art/full_jpg/79ebded1-3d06-4f0a-8ab2-5160d937b042",
            "https://image.lexica.art/full_jpg/3d5bdcfc-afad-43da-b664-ea6361c4fd25",
            "https://image.lexica.art/full_jpg/939fccad-b971-4a2f-8db6-348c6733f0c8",
          ],
        },
        {
          description:
            "visual stimulation black and white pattern for babies lion",
          urls: [
            "https://image.lexica.art/full_jpg/b7932aad-bf03-4672-85aa-b0111bf5a9b3",
            "https://image.lexica.art/full_jpg/2129f6e5-7899-4b23-ab2f-6c2331b69ef3",
            "https://image.lexica.art/full_jpg/3d80f7f0-9ba2-4a1a-bb1f-16a9559dede6",
            "https://image.lexica.art/full_jpg/ae274086-91e7-412d-959c-e61392fb06ef",
          ],
        },
        {
          description:
            "Portrait of a lion with gold armor and fire on the backround",
          urls: [
            "https://image.lexica.art/full_jpg/020f8204-a22a-4f69-8f9e-26b99cb53e2d",
            "https://image.lexica.art/full_jpg/8a62c75c-2632-4034-ac39-687b87aae7bc",
            "https://image.lexica.art/full_jpg/df43add3-f036-4b05-9b48-ea518e8a04e1",
            "https://image.lexica.art/full_jpg/c0062407-baeb-48c6-b7e1-799f1fdee4ef",
          ],
        },
        {
          description:
            "Detailed isometric lion, pixel art, unreal engine voxel render",
          urls: [
            "https://image.lexica.art/full_jpg/81762f16-4029-490a-85ff-7466a48a46ba",
            "https://image.lexica.art/full_jpg/9a61361a-2529-4d5a-8cba-d33eb49601c0",
            "https://image.lexica.art/full_jpg/e252b991-f748-46da-909f-15c42a8725e4",
            "https://image.lexica.art/full_jpg/eff317c1-4857-4dfa-bfda-cf1ded6a76c0",
          ],
        },
        {
          description:
            "lion, in a biker jacket, 3d octane render, focus face, funko pop.",
          urls: [
            "https://image.lexica.art/full_jpg/eeb5cddb-3adb-4927-a86a-eb09466afded",
            "https://image.lexica.art/full_jpg/33103f30-768f-4de0-b0d0-9aa366210f10",
            "https://image.lexica.art/full_jpg/e44a2dbb-d007-490f-8cd7-bfd290ef89f2",
            "https://image.lexica.art/full_jpg/3b407bdc-5943-4937-84be-f7e38dc0f105",
          ],
        },
        {
          description: "Portrait de lion avec un chapeau",
          urls: [
            "https://image.lexica.art/full_jpg/9bb09e67-7516-44e6-8173-1f5b02e47f2e",
            "https://image.lexica.art/full_jpg/65828c9b-93c4-409c-9400-1b4f230f93ad",
            "https://image.lexica.art/full_jpg/7d992859-60a2-4019-be03-1d9dd47f07aa",
            "https://image.lexica.art/full_jpg/cee9f806-eac2-41f6-ab4e-b9a71d36ea2b",
          ],
        },
        {
          description: "lion art art nouveaux style line art",
          urls: [
            "https://image.lexica.art/full_jpg/4ee56882-3190-4d40-97df-5b9a879dfd5b",
            "https://image.lexica.art/full_jpg/bf9e014d-959f-4edd-a7db-201d1ec564f0",
            "https://image.lexica.art/full_jpg/54468f54-46b7-4fa3-8972-6f08b5c10035",
            "https://image.lexica.art/full_jpg/30065d1b-fa8a-4e1d-bcd5-f11e174972d6",
          ],
        },
        {
          description: "Bulgarian druid lion head",
          urls: [
            "https://image.lexica.art/full_jpg/ff88f847-7ff6-458b-b67d-0cc61b9788f3",
            "https://image.lexica.art/full_jpg/3ceaa288-2f52-4ca5-aa6d-aee301b49f32",
            "https://image.lexica.art/full_jpg/a224a749-a60b-42c3-b1af-091165049afa",
            "https://image.lexica.art/full_jpg/8a84e1ec-3ef0-4b22-acf0-659027181f24",
          ],
        },
        {
          description:
            "hyperdimensional male muscular albino furry lion in his 3 d bioluminescent radically alive dimensions of fungal fractals and butterflies, circuitry and electricity, intricate mycelial lace, trending in art station, fractalpunk, rococo, ultra detailed, intricate details, ornate, hyperrealistic, inspired by ross tran & brian froud & james jean & android jones & william morris & ernst haeckel & alphonse mucha, unreal engine render, octane render",
          urls: [
            "https://image.lexica.art/full_jpg/321d490b-5a1e-4099-a5a9-5604f405ad14",
          ],
        },
        {
          description:
            "a beautfiul award winning aesthetic commission of an anthro lion animal wearing a white padded hooded puffer jacket,digital art,art by artgerm,character design by charles bowater,ross tran,photorealistic,detailed face,hyperdetailed,western comic,2021,artstation,deviantart, in a very dark background",
          urls: [
            "https://image.lexica.art/full_jpg/4ae238ba-1ed5-419f-9241-772c12a8f035",
            "https://image.lexica.art/full_jpg/b098411d-be11-4406-92d5-596a66222e17",
            "https://image.lexica.art/full_jpg/f88ec198-2062-446a-82d6-32aba37a3a79",
            "https://image.lexica.art/full_jpg/4892c770-a30a-4559-8023-1f83c481feec",
          ],
        },
        {
          description:
            "a beautfiul award winning aesthetic commission of an antrho lion wearing a black padded hooded puffer jacket,digital art,art by artgerm,character design by charles bowater,ross tran,photorealistic,detailed face,hyperdetailed,western comic,2021,artstation,deviantart",
          urls: [
            "https://image.lexica.art/full_jpg/a9637652-a7f5-4663-b33d-98632e67c9f9",
            "https://image.lexica.art/full_jpg/90ad45a6-f90c-4793-9a31-8dc81a96dd5f",
            "https://image.lexica.art/full_jpg/75cf5148-f3ea-491d-9fde-3cebb90b93c7",
            "https://image.lexica.art/full_jpg/0b72b502-9072-4fcd-ad72-a1a7ca8c7c56",
          ],
        },
        {
          description: "Lionj roar",
          urls: [
            "https://image.lexica.art/full_jpg/d1d002c2-6341-4757-ac45-7e956ee99e40",
            "https://image.lexica.art/full_jpg/587ef54d-19d8-4c97-a0dd-1f53a5d5fe6e",
            "https://image.lexica.art/full_jpg/eb3be932-4388-4fe6-a1a1-06aa16f581a7",
            "https://image.lexica.art/full_jpg/a1f3ed0a-97ab-42b6-b676-89e3060737a6",
          ],
        },
        {
          description:
            "A lion with a cashmere scarf and a gold crown with diamonds",
          urls: [
            "https://image.lexica.art/full_jpg/8acc6c8d-d08c-4794-a659-4f6eab9fd9d3",
            "https://image.lexica.art/full_jpg/659166ee-4e80-4557-b73f-a8ac6f940a30",
            "https://image.lexica.art/full_jpg/dd96088f-56c4-48d9-972b-2ede0a5f7472",
            "https://image.lexica.art/full_jpg/0e582b1f-65a8-467d-a468-fcd80060df94",
          ],
        },
        {
          description:
            "king muscular robotic lion, roaring, highly detailed, vibrant, digital art",
          urls: [
            "https://image.lexica.art/full_jpg/deaa83b9-864b-4626-b837-b79e1a694187",
            "https://image.lexica.art/full_jpg/1ca0e360-5ac9-4df0-8c83-00cf9b1c61b5",
            "https://image.lexica.art/full_jpg/242dcc6c-33d6-4e3f-8ddc-8b0615abb52d",
            "https://image.lexica.art/full_jpg/762894d2-2df3-4b0c-9283-9c5e75a155d6",
          ],
        },
        {
          description: "8k resoultion,hyper realstic, lion in T-REX",
          urls: [
            "https://image.lexica.art/full_jpg/b8305f8f-e642-43b3-813e-f1d4b695fb59",
            "https://image.lexica.art/full_jpg/7106a0ee-63e2-4a4e-97e9-944183fddde9",
            "https://image.lexica.art/full_jpg/b987720d-368c-4743-92bc-265d7de8a1e3",
            "https://image.lexica.art/full_jpg/e3fd5228-072f-4ed0-aab9-85ddc4ec967f",
          ],
        },
        {
          description:
            "high quality 3 d render hyperrealist very cute multipastel fluffy! Baby lion Ray smooth, in the style of  hannah yata charlie immer, dramatic blue light, low angle, uhd 8 k, sharp focus",
          urls: [
            "https://image.lexica.art/full_jpg/888dd129-0c32-4380-b6f5-ff5e6cd2dbfa",
            "https://image.lexica.art/full_jpg/4274db43-28ef-48b2-9a2d-9044ce19f97d",
            "https://image.lexica.art/full_jpg/b386bdc1-717f-473d-af1c-e3e9d04e2711",
            "https://image.lexica.art/full_jpg/80af0dde-fdd3-47d3-8935-d96c6b42128e",
          ],
        },
        {
          description: "retrato realista de un leon",
          urls: [
            "https://image.lexica.art/full_jpg/96a639f5-7890-4c86-beda-96fe2f66cf7a",
            "https://image.lexica.art/full_jpg/144e8325-253b-4632-a3ad-c73208ba0134",
            "https://image.lexica.art/full_jpg/64fece62-b52a-4916-9d14-92ca8644c60c",
            "https://image.lexica.art/full_jpg/1668cf49-cc97-4ad2-9dc4-d7c922f30487",
          ],
        },
        {
          description: "gold lion with morocco logo",
          urls: [
            "https://image.lexica.art/full_jpg/f740363b-7fda-48bd-92d3-497049e1b354",
            "https://image.lexica.art/full_jpg/3b7711fc-34f7-44bf-9b76-6a9d13be99d5",
            "https://image.lexica.art/full_jpg/7cc0ec79-104d-40cc-80ad-e859510a2f22",
            "https://image.lexica.art/full_jpg/64e04e9c-b6e4-4bf7-9b37-550d153893a1",
          ],
        },
        {
          description: "gold lion",
          urls: [
            "https://image.lexica.art/full_jpg/bd497e97-c63a-4899-b351-d2cef8eed51e",
            "https://image.lexica.art/full_jpg/dd730461-2ba6-4c97-8367-5d3df2573637",
            "https://image.lexica.art/full_jpg/8bbad608-c8f6-426b-b564-3f8cfdfe645b",
            "https://image.lexica.art/full_jpg/8ea500c2-0c8a-477c-8a7c-eb48afe30d10",
          ],
        },
        {
          description: "Vector !!!, Lion simple black and white",
          urls: [
            "https://image.lexica.art/full_jpg/a95aef1f-d81f-4e5a-aaf3-9145870ef27d",
            "https://image.lexica.art/full_jpg/16a20e41-f7fb-43ae-a4b4-54cb4e84919f",
            "https://image.lexica.art/full_jpg/d6b539c7-373b-43ec-9e1c-d73520496281",
            "https://image.lexica.art/full_jpg/715fc47e-fd39-47b1-9b34-da5b4bc1027e",
          ],
        },
        {
          description:
            "commission portrait of a male anthro LION wearing heavy combat armour,character,hyperdetailed,hyperrealistic,4k,deviantart,artstation,professional photography,INTRINCAte design",
          urls: [
            "https://image.lexica.art/full_jpg/9f3640da-8012-4271-8db5-688ea9049c4c",
            "https://image.lexica.art/full_jpg/f547eb97-b5f4-4b95-8667-d47c8e27adc1",
            "https://image.lexica.art/full_jpg/9e34f2e2-fdcf-4653-a17d-dc3d8bfb2266",
            "https://image.lexica.art/full_jpg/e539f183-3618-4ea4-979a-53c1e42a581a",
          ],
        },
        {
          description:
            "Steve vai sitting next to a friendly lion inside_the_metropolitan_museum_in_new_york, standing:0.901, solo:0.900, centered_composition:1.000, very soft light, cinematic photography, cinematic composition, very detailed textures",
          urls: [
            "https://image.lexica.art/full_jpg/5e59b7a8-d0e9-48c8-80df-f1360b87ffac",
            "https://image.lexica.art/full_jpg/876fd94e-86a6-441c-a301-82056e35f123",
            "https://image.lexica.art/full_jpg/e741b369-f44f-4291-957c-309ed423933f",
            "https://image.lexica.art/full_jpg/60760070-c05e-49b9-af49-17e33a67738b",
          ],
        },
        {
          description: "a lion humanoid fishing",
          urls: [
            "https://image.lexica.art/full_jpg/191d0fb0-39ae-4976-a5a3-b998e49dc30c",
            "https://image.lexica.art/full_jpg/4314df27-cc9f-4fd4-a877-dbcc34b797f0",
            "https://image.lexica.art/full_jpg/4b70a03f-11c2-4751-8618-bc9b128bda5c",
            "https://image.lexica.art/full_jpg/96c59508-144d-4844-9e56-8b8005090461",
          ],
        },
        {
          description:
            "/Mechanical lion, metallic colors, uhd, 16k, hyperornate,digital quilling,clear and defined eyes,",
          urls: [
            "https://image.lexica.art/full_jpg/d59c6473-2dce-419b-a500-eaa4da9915b5",
            "https://image.lexica.art/full_jpg/0df65072-15aa-4475-89c1-08726921ab11",
            "https://image.lexica.art/full_jpg/0c9d5dba-8685-4990-be20-7a2437ce9dfe",
            "https://image.lexica.art/full_jpg/b00e412d-9185-4bb2-92ae-95fcfc36a949",
          ],
        },
        {
          description:
            "a black and white drawing of a lion's head, a drawing by Christabel Dennison, lyco art, outlined art, high detailed,",
          urls: [
            "https://image.lexica.art/full_jpg/9fc3f984-aec9-4028-bbb9-cebf39fa7cf7",
            "https://image.lexica.art/full_jpg/799fb442-1b93-4ca5-8a4c-68a3df173258",
            "https://image.lexica.art/full_jpg/599729c2-bf05-4dea-8870-089b96de73ec",
            "https://image.lexica.art/full_jpg/2d1f0885-1441-4a13-8a91-e53f71fbf2bc",
          ],
        },
        {
          description: "Baby lion, steampunk 4k cartoon",
          urls: [
            "https://image.lexica.art/full_jpg/ebd71e70-7374-45fc-92cd-ed918c4d583d",
            "https://image.lexica.art/full_jpg/cdf23bb5-29a9-46a9-a8a8-23e94800a7b3",
            "https://image.lexica.art/full_jpg/9cd06349-8839-4047-b659-8fcf572c2b3f",
            "https://image.lexica.art/full_jpg/9d2fea12-d119-4838-9485-273174453a6c",
          ],
        },
        {
          description: "A steampunk robot lion",
          urls: [
            "https://image.lexica.art/full_jpg/b44afff5-8255-4a5d-8dd9-7721b4c8a24d",
            "https://image.lexica.art/full_jpg/da25f01d-a864-4676-8c31-de55c82d420c",
            "https://image.lexica.art/full_jpg/b3042587-c3a5-47ef-8aeb-9a09cb8e4864",
            "https://image.lexica.art/full_jpg/b7fed393-34a7-459c-93a8-aff7c2830cfe",
          ],
        },
        {
          description:
            "subsurface scattering, lion deity with ivory armor, art nouveau swirls, vibrant colors, octane render, by jesper ejsing, james jean, justin gerard, tomasz alen kopera, cgsociety and fenghua zhong, highly detailed, rim light, art, cinematic lighting, very coherent, hyper realism, high detail, 8 k",
          urls: [
            "https://image.lexica.art/full_jpg/ae88dcf7-561a-4efb-be17-9950dc928e26",
            "https://image.lexica.art/full_jpg/7726a760-ca0c-44b5-b1ae-73de18a84ae1",
            "https://image.lexica.art/full_jpg/41605a84-57cd-4012-950c-81f173683013",
            "https://image.lexica.art/full_jpg/f5d053ce-5adb-4fa2-8920-420e38495169",
          ],
        },
        {
          description: "A lion‘s head carved into stone",
          urls: [
            "https://image.lexica.art/full_jpg/6ab9fc9d-fdfc-4cc9-b508-ea31e98d1ad5",
            "https://image.lexica.art/full_jpg/1f8db809-b853-4c2a-9820-eb0cb6b1022b",
            "https://image.lexica.art/full_jpg/b814dddc-4820-4836-b793-5f8a9feae7e8",
            "https://image.lexica.art/full_jpg/ea151657-4787-4151-8cf0-ab7cd2c983b3",
          ],
        },
        {
          description: "lion aztec",
          urls: [
            "https://image.lexica.art/full_jpg/31d81722-07b9-4479-bcce-ed5c21da2ab4",
            "https://image.lexica.art/full_jpg/831d7b30-b4a3-4552-87f4-10bba6577cd8",
            "https://image.lexica.art/full_jpg/fcd93973-5256-4525-88d4-6511b0328e2c",
            "https://image.lexica.art/full_jpg/07d21178-17f7-4029-a8ed-ff08bd06d657",
          ],
        },
        {
          description: "Portrait of a completely gray male lion",
          urls: [
            "https://image.lexica.art/full_jpg/32619dec-3ecb-46a5-8f20-6da37462c77a",
            "https://image.lexica.art/full_jpg/291cac20-be5e-4633-b1ba-913ca013eb56",
            "https://image.lexica.art/full_jpg/6d33d12b-6d5b-4a9d-b21c-a5d6aa59f680",
            "https://image.lexica.art/full_jpg/da3d79f8-c786-4b05-af2f-dd7b69658b08",
          ],
        },
        {
          description:
            "detailed sketch of a lion, pencil, black and white pattern, mysterious desert, simple, 8 k, by studio ghibli, trending on deviantart, hyper detailed",
          urls: [
            "https://image.lexica.art/full_jpg/eb9ac426-65af-4cd9-869b-9b0ca48ce9b8",
            "https://image.lexica.art/full_jpg/97cfa129-ed7f-47f1-af08-40ec6897cdf1",
            "https://image.lexica.art/full_jpg/f0c0b578-7013-433c-b7ab-e6b0c4b093ab",
            "https://image.lexica.art/full_jpg/87a9b255-800f-439b-acb5-85da991c9ec8",
          ],
        },
        {
          description:
            "Steve vai sitting next to a friendly lion inside_the_metropolitan_museum_in_new_york, standing:0.901,solo:0.900, centered_composition:1.000, very soft light, cinematic photography, cinematic composition, very detailed textures",
          urls: [
            "https://image.lexica.art/full_jpg/300267c3-98aa-4833-8988-4f92403c77bd",
            "https://image.lexica.art/full_jpg/074b1c0d-c31b-4056-9679-abe8dd7e42a2",
            "https://image.lexica.art/full_jpg/be990613-774b-48f7-a684-99577737ae82",
            "https://image.lexica.art/full_jpg/513e4540-2a20-43a5-bcc7-d3f4e01dbd0b",
          ],
        },
        {
          description:
            "A muscular lion, with a sarcastic smile, wearing a crown and a light blue tuxedo",
          urls: [
            "https://image.lexica.art/full_jpg/3d497a27-ef2e-4263-a646-8cd3be9baa1a",
            "https://image.lexica.art/full_jpg/ecdde61d-cd05-4cdb-8b51-dcaf8390be50",
            "https://image.lexica.art/full_jpg/d685e4db-9035-42e8-95d7-935a100fef7e",
            "https://image.lexica.art/full_jpg/a807d4b8-5898-421b-a2a4-5ef315825856",
          ],
        },
        {
          description:
            "Still life of ribbed abandoned lion face portrait on exoplanet in heaven, covered with roots, wires, tubes, organic flesh, meat, standing in a desolate empty wasteland, lit by a column of light from flying saucer ufo above, baroque painting, creepy, nightmare, dream-like heavy atmosphere, surreal abandoned buildings, baroque painting, beautiful detailed intricate insanely detailed octane render trending on Artstation, 8K artistic photography, photorealistic, chiaroscuro, Raphael, Caravaggio, Beksinski, Giger",
          urls: [
            "https://image.lexica.art/full_jpg/b73538e3-0344-4753-9c53-c3945eca0052",
            "https://image.lexica.art/full_jpg/bde733ed-cbd9-49ac-a57e-f1fca2ae23c5",
            "https://image.lexica.art/full_jpg/a9bf82be-3057-451d-9d48-e579093cfc5b",
            "https://image.lexica.art/full_jpg/a38a1eef-ddc8-4ca6-83f6-e9b0c6fbf23f",
          ],
        },
        {
          description: "Portrait of a male silver lion",
          urls: [
            "https://image.lexica.art/full_jpg/f00ba709-1aed-46d6-81c5-0c470da6ace3",
            "https://image.lexica.art/full_jpg/e415e471-c3e6-4e3b-aba5-7e62ae3b7c20",
            "https://image.lexica.art/full_jpg/72ab07c2-1c4c-4b3b-90e6-14f4f05d3afa",
            "https://image.lexica.art/full_jpg/d39cd55d-ba22-4147-88a1-86de448f35b8",
          ],
        },
        {
          description:
            "Steve vai sitting next to a friendly lion inside_the_metropolitan_museum_in_new_york, standing:0.901,solo:0.900, centered_composition:1.000, very soft light, cinematic photography, cinematic composition, very detailed textures",
          urls: [
            "https://image.lexica.art/full_jpg/27cb4c40-e9e9-4b9d-b8ef-e795f9ae5b3e",
            "https://image.lexica.art/full_jpg/afdb1fb6-6028-458d-94cd-9c8d1b861fa8",
            "https://image.lexica.art/full_jpg/45e31836-8c62-4e9c-a905-10e7efb084cf",
            "https://image.lexica.art/full_jpg/97eb33db-a54d-4f49-b573-5e8571ad444b",
          ],
        },
        {
          description: "a hynosis type pokemon that resembles a lion",
          urls: [
            "https://image.lexica.art/full_jpg/ddeac2b8-73c2-4446-b3fc-703dedbae129",
            "https://image.lexica.art/full_jpg/1f3bdf44-a7b5-40ca-8ad5-8856b10e4eb1",
            "https://image.lexica.art/full_jpg/42ac3070-05e9-4672-953f-a9a17929fbac",
            "https://image.lexica.art/full_jpg/9dfa7739-91d9-4956-8f56-b66ec3e3f283",
          ],
        },
      ],
      images: [
        "https://image.lexica.art/full_jpg/020f8204-a22a-4f69-8f9e-26b99cb53e2d",
        "https://image.lexica.art/full_jpg/074b1c0d-c31b-4056-9679-abe8dd7e42a2",
        "https://image.lexica.art/full_jpg/07d21178-17f7-4029-a8ed-ff08bd06d657",
        "https://image.lexica.art/full_jpg/0df65072-15aa-4475-89c1-08726921ab11",
        "https://image.lexica.art/full_jpg/16a20e41-f7fb-43ae-a4b4-54cb4e84919f",
        "https://image.lexica.art/full_jpg/191d0fb0-39ae-4976-a5a3-b998e49dc30c",
        "https://image.lexica.art/full_jpg/1f8db809-b853-4c2a-9820-eb0cb6b1022b",
        "https://image.lexica.art/full_jpg/242dcc6c-33d6-4e3f-8ddc-8b0615abb52d",
        "https://image.lexica.art/full_jpg/321d490b-5a1e-4099-a5a9-5604f405ad14",
        "https://image.lexica.art/full_jpg/32619dec-3ecb-46a5-8f20-6da37462c77a",
        "https://image.lexica.art/full_jpg/3b407bdc-5943-4937-84be-f7e38dc0f105",
        "https://image.lexica.art/full_jpg/41605a84-57cd-4012-950c-81f173683013",
        "https://image.lexica.art/full_jpg/4274db43-28ef-48b2-9a2d-9044ce19f97d",
        "https://image.lexica.art/full_jpg/4ae238ba-1ed5-419f-9241-772c12a8f035",
        "https://image.lexica.art/full_jpg/4bf4d2f3-961f-432a-958a-ed484a1dc436",
        "https://image.lexica.art/full_jpg/503a13f6-68fb-4a71-b6ec-37e62a21630f",
        "https://image.lexica.art/full_jpg/54468f54-46b7-4fa3-8972-6f08b5c10035",
        "https://image.lexica.art/full_jpg/587ef54d-19d8-4c97-a0dd-1f53a5d5fe6e",
        "https://image.lexica.art/full_jpg/60760070-c05e-49b9-af49-17e33a67738b",
        "https://image.lexica.art/full_jpg/64fece62-b52a-4916-9d14-92ca8644c60c",
        "https://image.lexica.art/full_jpg/65828c9b-93c4-409c-9400-1b4f230f93ad",
        "https://image.lexica.art/full_jpg/659166ee-4e80-4557-b73f-a8ac6f940a30",
        "https://image.lexica.art/full_jpg/7106a0ee-63e2-4a4e-97e9-944183fddde9",
        "https://image.lexica.art/full_jpg/799fb442-1b93-4ca5-8a4c-68a3df173258",
        "https://image.lexica.art/full_jpg/80af0dde-fdd3-47d3-8935-d96c6b42128e",
        "https://image.lexica.art/full_jpg/81762f16-4029-490a-85ff-7466a48a46ba",
        "https://image.lexica.art/full_jpg/87a9b255-800f-439b-acb5-85da991c9ec8",
        "https://image.lexica.art/full_jpg/939fccad-b971-4a2f-8db6-348c6733f0c8",
        "https://image.lexica.art/full_jpg/a807d4b8-5898-421b-a2a4-5ef315825856",
        "https://image.lexica.art/full_jpg/a9637652-a7f5-4663-b33d-98632e67c9f9",
        "https://image.lexica.art/full_jpg/ae274086-91e7-412d-959c-e61392fb06ef",
        "https://image.lexica.art/full_jpg/afdb1fb6-6028-458d-94cd-9c8d1b861fa8",
        "https://image.lexica.art/full_jpg/b3042587-c3a5-47ef-8aeb-9a09cb8e4864",
        "https://image.lexica.art/full_jpg/b7932aad-bf03-4672-85aa-b0111bf5a9b3",
        "https://image.lexica.art/full_jpg/bd497e97-c63a-4899-b351-d2cef8eed51e",
        "https://image.lexica.art/full_jpg/bde733ed-cbd9-49ac-a57e-f1fca2ae23c5",
        "https://image.lexica.art/full_jpg/ceb239a7-e4b0-42e4-ad2b-f95985c66b8f",
        "https://image.lexica.art/full_jpg/d39cd55d-ba22-4147-88a1-86de448f35b8",
        "https://image.lexica.art/full_jpg/ddeac2b8-73c2-4446-b3fc-703dedbae129",
        "https://image.lexica.art/full_jpg/e539f183-3618-4ea4-979a-53c1e42a581a",
        "https://image.lexica.art/full_jpg/ebd71e70-7374-45fc-92cd-ed918c4d583d",
        "https://image.lexica.art/full_jpg/f740363b-7fda-48bd-92d3-497049e1b354",
        "https://image.lexica.art/full_jpg/ff88f847-7ff6-458b-b67d-0cc61b9788f3",
      ],
    },
  };
  
  
  console.log(data);
 
   for(let s in  data)
   {
     

   }


   //console.log('woeking but checking',Object.entries(props.sender)[2]);

  //  const trial=[...data.results.images]

  if (Object.keys(data).length != 0) {
    return (
      <>
      
        <div className={classes.page}>
          <div className={classes.loaderText}>Your Images are here.....</div>
          <div className={classes.imageContainer}>
          {Object.entries(data)[2][1].images.map((data,index)=>(
        <NavLink to={data}>
          
  
          <img src={data} className={classes.img}
          width={200} height={200}
          placeholder={data}
          effect="blur"
          ></img>
          
        </NavLink>
     ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
 
        <div className={classes.page}>
          <div className={classes.loaderText}>Opps Api calls exhausted , due to limited api calls , the service is temporarily not working</div>
          <div className={classes.imageContainer}></div>
        </div>
      </>
    );
  }

  /*  {trial.map((data,index)=>(
        <NavLink to={data}>
          
  
          <img src={data} className={classes.img}
          width={200} height={200}
          placeholder={data}
          effect="blur"
          ></img>
          
        </NavLink>
     ))} */

  

}
