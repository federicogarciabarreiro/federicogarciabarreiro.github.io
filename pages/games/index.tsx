import DefaultLayout from "@/layouts/default";

import { GameType } from "@/types/game";
import UnityApp from "@/components/UnityApp";
import { GameList } from "@/utils/gameList";

export default function Games() {
    return (
        <DefaultLayout>
            <section className="items-center justify-center m-auto w-auto">
                <div className="text-center justify-center">
                    <section className="p-20 overflow-hidden 2xl:overflow-visible">
                        {GameList.map((game: GameType) => (
                            <UnityApp
                            key={`game-item-${game.title}`}
                                {...game}
                            />
                        ))}

                    </section>
                </div>
            </section>
        </DefaultLayout>
    );
}