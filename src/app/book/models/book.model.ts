export interface Book {
    id: number;
    name: string;
    genre: string;
    image: string;
    releaseYear: string;
}

export const books: Book[] = [
{
    id: 1,
    name: ' Najbolje od mene ',
    genre: ' Drama ',
    image: 'https://happynovisad.com/slike/knjige/najbolje_od_mene_nikolas_sparks.jpg',
    releaseYear: '2014',
},
{
    id: 2,
    name: ' Zamak u Pirinejima ',
    genre: ' Ljubavni ',
    image: 'https://happynovisad.com/slike/knjige/zamak_u_pirinejima.jpg',
    releaseYear: '2009',
},
{
    id: 3,
    name: ' Konstantinovo raskršće ',
    genre: ' Istorijski ',
    image: 'https://happynovisad.com/slike/knjige/konstantinovo_rasksce_1.jpg',
    releaseYear: '2009',
},
{
    id: 4,
    name: ' Pod kupolom ',
    genre: ' Horor ',
    image: 'https://happynovisad.com/slike/knjige/pod_kupolom_stiven_king.jpg',
    releaseYear: '2011',
},
{
    id: 5,
    name: ' A planine odjeknuše ',
    genre: ' Drama ',
    image: 'https://happynovisad.com/slike/knjige/a_planine_odjeknuse_haled_hoseini.jpg',
    releaseYear: '2018',
},
{
    id: 6,
    name: ' Soul Journal ',
    genre: ' Ljubavni ',
    image: 'https://happynovisad.com/slike/knjige/soul_journal_zana_poliakov.jpg',
    releaseYear: '2013',
},
{
    id: 7,
    name: ' Divergentni ',
    genre: ' Naučna fantastika ',
    image: 'https://happynovisad.com/slike/knjige/divergentni_veronika_rot.jpg',
    releaseYear: '2013',
},
{
    id: 8,
    name: ' Posetilac ',
    genre: ' Triler ',
    image: 'https://happynovisad.com/slike/knjige/posetilac_li_cajld.jpg',
    releaseYear: '2014',
},
];