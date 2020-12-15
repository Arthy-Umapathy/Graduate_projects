package statemachine.trade;

import cli.CliAbstractFactory;
import cli.ICli;
import cli.MockCli;
import leagueobjectmodel.PlayerModel;
import mock.ModelMock;
import org.junit.Assert;
import org.junit.jupiter.api.Test;

import java.io.ByteArrayInputStream;
import java.util.List;

public class test {

    @Test
    void displayTeamDetails() {
        ByteArrayInputStream userinput = new ByteArrayInputStream("1".getBytes());
        System.setIn(userinput);
        ModelMock mock;
        ITradeModel model;
        IUserTradeCli userTradeCli;
        model = TradeAbstractFactory.instance().createTradeModel();
        mock = new ModelMock();
        List<PlayerModel> offeredPlayer = mock.playerList();
        List<PlayerModel> requestedPlayer = mock.playerList();
        model.setOfferedPlayer(offeredPlayer);
        model.setRequestedPlayers(requestedPlayer);
        userTradeCli = TradeAbstractFactory.instance().createUserTradeCli();
        ICli cli = new MockCli();
        CliAbstractFactory.getInstance().setCli(cli);
        int input = userTradeCli.displayTeamDetails();
        Assert.assertEquals(input, 1);
    }
}