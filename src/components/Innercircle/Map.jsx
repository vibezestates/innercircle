import React from 'react';
import mapImg from '../../images/map.webp';
import { MoveRight } from 'lucide-react';
function Map() {

    return (<>
        <div className="bg-black pt-8">


            <div className="header">
                <h6 className="text-[36px] dm-serif-italic text-[#FFFFFFCC] max-w-[1100px] m-auto mb-6">Where accessibility meets altitude. Where growth meets greenery.</h6>
                <div className="w-full">
                    <img className="w-full max-h-[400px] object-cover" src={mapImg} />
                </div>
                <div className="Link text-center p-10">
                    <a
                        className="flex items-center justify-center gap-2 text-[14px] text-white underline uppercase"
                        href="https://www.google.com/maps/search/kaira+vibez/@12.8888812,75.8016901,15z?entry=s&sa=X&ved=1t%3A199789"
                        target="_blank"
                    >
                        Expand google map <MoveRight />
                    </a>
                </div>

            </div>
        </div>
    </>);
}

export default Map;